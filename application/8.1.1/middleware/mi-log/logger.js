const log4js = require("log4js");
const path = require("path");

module.exports = (options = null) => {
    return async (ctx, next) => {
        const start = new Date().getTime();
        log4js.configure({
            appenders: {
                cheese: { type: 'file', filename: path.resolve(__dirname, '../../log/cheese.log')}
            },
            categories: {
                default: { appenders: ['cheese'], level: 'info' }
            }
        });
        const logger = log4js.getLogger('cheese');
        await next();
        const end = new Date().getTime();
        const responseTime = Math.ceil((end-start) / 1000);
        console.log(`响应时间为：${responseTime}s`);
        logger.info(`响应时间为：${responseTime}s`);
    }
}