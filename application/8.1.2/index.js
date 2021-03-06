const koa = require("koa");
const app = new koa();
const middleware = require("./middleware");

app.use(middleware());

app.use(async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = `
        <h4>Hello world!</h4>
    `
});

app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000`)
});