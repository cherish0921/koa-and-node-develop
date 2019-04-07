const koa = require("koa");
const app = new koa();
const miLog = require("./middleware");

app.use(miLog());

app.use(async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = `
        <h4>Hello World!</h4>
    `
});

app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000`);
});