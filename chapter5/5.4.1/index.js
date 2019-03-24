const koa = require('koa');
const app = new koa();
const path = require('path');
const static = require('koa-static');
const koaNunjucks = require('koa-nunjucks-2');
const bodyparser = require('koa-bodyparser');
const middleware = require('./middleware');
const router = require('./router');


app.use(static(path.resolve(__dirname, 'static'), {
    maxAge: 3600000 * 2
}));

app.use(koaNunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
      trimBlocks: true
    }
}));

app.use(bodyparser()).use(middleware()).use(router.routes()).use(router.allowedMethods());

app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000`);
});