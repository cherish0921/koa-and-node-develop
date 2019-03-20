const koa = require('koa');
const router = require('./router');
const app = new koa();
const bodyparser = require('koa-bodyparser');

app.use(bodyparser()).use(router.routes()).use(router.allowedMethods());

app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000`);
});