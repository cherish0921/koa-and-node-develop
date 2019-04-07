const log4js = require("log4js");
const path = require("path");
const logconfig = require("./config");
/**
 * @description log4js所有日志级别
 */
const methods = ['trace，debug，info，warn，error，fatal'];
const access = (ctx, message, options) => {
    const { url, method, host, ip, headers} = ctx.request;
    const clientinfo = {
        ip, //TODO: 客户端ip
        host, //TODO: 客户端host
        url,  //TODO: 客户端请求URL
        method, //TODO: 客户端请求method、
        ...message,
        language: headers['accept-language'], //TODO: 客户端语言
        useragent: headers['user-agent'] //TODO: 客户端访问webview信息
    }
    return JSON.stringify(Object.assign(options, clientinfo));
}

module.exports = (options = null) => {
    const contextlogger = Object.create(null);
    const appenders = Object.create(null);
    //TODO: {apploglevel: "debug", dir: "develop", env: "develop"}
    const opts = Object.assign({}, logconfig, options); 
    const { apploglevel, dir, env, projectname, serverip } = opts;
    appenders['cheese'] = {
        type: 'dateFile',
        filename: path.resolve(__dirname, `../../log/${dir}/${dir}`), //TODO: log/develop/develop
        pattern: 'yyyy-MM-dd.log',
        compress: true, //TODO: 开启gzip模式
        alwaysIncludePattern: true, //TODO: 在当前日志文件的名称中包含模式以及备份
        daysToKeep: 30 //TODO: 删除早于30天前的文件
    }
    /**
     * @description 开发模式将所有日志事件写入标准输出流
     * stdout
     * console
     */
    if(env == 'develop'){
        appenders['out'] = { type: 'console' };
    }
    const config = {
        appenders,
        categories: {
            default: { appenders: Object.keys(appenders), level: apploglevel}
        }
    }
    log4js.configure(config);
    const logger = log4js.getLogger('cheese');
    return async (ctx, next) => {
        const start = Date.now();
        methods.forEach(method => {
            contextlogger[method] = (message) => {
                logger[method](access(ctx, message, {projectname, serverip}));
            }
        });
        ctx.log = contextlogger; //TODO: 例： ctx.log.debug('响应时间:1s');
        await next();
        const end = Date.now();
        const responseTime = ((end - start) / 1000).toFixed(2);
        // TODO: 开发采用debug输出日志
        if(env == 'develop'){
            logger.debug(access(ctx, {responseTime: `响应时间为：${responseTime}s`}, {projectname, serverip}));
        }else{
            logger.info(access(ctx, {responseTime: `响应时间为：${responseTime}s`}, {projectname, serverip}));
        }
    }
}