const koa = require('koa');
const app = new koa();

/**
 * TODO: ctx.request对象
 * @param {*} GET请求
 */
app.use(async (ctx, next) => {
    const responsejson = {
        url: ctx.request.url, //TODO: 获取请求URL
        query: ctx.request.query, //TODO: 获取解析的查询字符串
        querystring: ctx.request.querystring, //TODO: 获取原始查询字符串
        cookies: ctx.headers.cookie //TODO: 获取携带的token
    };
    ctx.response.body = JSON.stringify(responsejson, null, '\t');
});




app.listen(3000, '192.168.103.16', () => {
    console.log(`server runing http://192.168.103.16:3000`);
});