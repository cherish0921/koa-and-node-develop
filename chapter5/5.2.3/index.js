const koa = require('koa');
const router = require('./router');
const bodyParser = require('koa-bodyparser');
const koaNunjucks = require('koa-nunjucks-2');
const path = require('path');
const app = new koa();


app.use(koaNunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: { //TODO: nunjucks配置项
      trimBlocks: true //TODO: 开启转义防止XSS漏洞
    }
})).use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000`);
});