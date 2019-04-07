const path = require("path");
const nunjucks = require('nunjucks');

module.exports = (opts = null) => {
    const env = process.env.NODE_ENV || 'develop'; //TODO: 增加环境变量判断
    const folder = opts.errorPageFolder; //TODO: error等页面路径
    const templatePath = path.resolve(__dirname, './error.html'); //TODO: 错误页面模板地址
    let fileName = 'other';
    return async (ctx, next) => {
        try {
            await next();
            /**
             * @description 正常抛出404未找到资源异常，方便catch捕捉处理
             */
            if(ctx.response.status == 404 && !ctx.response.body){
                ctx.throw(404);
            }
        } catch (e) {
            let status = parseInt(e.status);
            const message = e.message;
            /**
             * @description 处理错误状态码 >= 400, 小于统一返回500页面
             */
            if(status >= 400){
                switch (status) {
                    case 400:
                    case 404:
                    case 500: 
                    {
                        fileName = status;
                    };
                    break;
                    default:
                    {
                        fileName = 'other';
                    };
                    break;
                }
            }else{
                status = 500;
                fileName = status;
            }
            /**
             * @description 获取对应错误类型视图
             */
            const filePath = folder ? path.join(folder, `${fileName}.html`) : templatePath;
            try {
                nunjucks.configure( folder ? folder : __dirname, {
                    autoescape: true, //TODO: 是否被转义
                    trimBlocks: true, //TODO: 自动去除 block/tag 后面的换行符
                    noCache: true //TODO: 使用缓存
                });
                const data = await nunjucks.render(filePath, {
                    env,
                    status: e.status || e.message,  //TODO:如果错误信息中没有 status，就显示为 message
                    error: message,   //TODO:错误信息
                    stack: e.stack  //TODO:错误的堆栈信息
                });
                ctx.response.status = status;
                ctx.response.body = data;
            } catch (e) {
                // TODO: 如果中间件存在错误异常，直接抛出信息，再由其他中间件处理
                ctx.throw(500, `错误页渲染失败:${e.message}`)
            }
        }
    }
}