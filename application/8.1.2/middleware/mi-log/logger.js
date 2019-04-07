const log4js = require("log4js");
const path = require("path");
/**
 * @description log4js所有methods
 * TRACE，DEBUG，INFO，WARN，ERROR，FATAL
 * logger.debug("Some debug messages");
 */
const methods = ['trace，debug，info，warn，error，fatal'];

module.exports = (options = null) => {
    const contextLogger = Object.create(null);
    log4js.configure({
        appenders: {
            cheese: { type: 'file', filename: path.resolve(__dirname, '../../log/cheese.log')}
        },
        categories: {
            default: { appenders: ['cheese'], level: 'info'}
        }
    });
    const logger = log4js.getLogger('cheese');
    return async (ctx, next) => {
        const { path, method } = ctx;
        const start = Date.now();
        methods.forEach(method => {
            contextLogger[method] = (message) => {
                logger[method](message); //TODO: 例：logger.debug("Some debug messages");
            }
        });
        ctx.log = contextLogger;
        await next();
        const end = Date.now(); 
        const responseTime = ((end - start) / 1000).toFixed(2);
        logger.info(`path: ${path},method: ${method}, responseTime: ${responseTime}s`);
    }
}