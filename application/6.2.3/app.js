const koa = require('koa');
const app = new koa();
const bodyparser = require('koa-bodyparser');
const path = require('path');
const static = require('koa-static');
const koaNunjucks = require('koa-nunjucks-2');
const router = require('./router');
const api = require('./api');

app.use(static(path.resolve(__dirname, 'static'), {
    maxAge: 3600000 * 2 //TODO: 静态资源缓存2小时
}));

app.use(koaNunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
        trimBlocks: true
    }
}));

app.use(bodyparser()).use(router.routes()).use(router.allowedMethods()).use(api.routes()).use(api.allowedMethods());

app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000`);
});