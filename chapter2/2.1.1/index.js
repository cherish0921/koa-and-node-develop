const koa = require('koa');
const app = new koa();
const port = 3000;
const hostname = '127.0.0.1';

app.use(async (ctx, next) => {
    await next();
    //TODO: console.log(ctx); ctx为Context 上下文对象
    ctx.response.type = 'text/html';
    ctx.response.body = '<h4>Hello World!</h4>';
});

app.listen(port, hostname, () => {
    console.log(`server running http://${hostname}:${port}`)
});