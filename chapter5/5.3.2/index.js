const koa = require('koa');
const app = new koa();
const router = require('./router');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const static = require('koa-static');
const koaNunjucks = require('koa-nunjucks-2');

/**
 * @description 使用koa-static静态资源
 */
app.use(static(path.resolve(__dirname, './static'), {
    maxAge: 3600000 //TODO: 缓存时间1h
}));

/**
 * @description 使用nunjucks 配置
 */
app.use(koaNunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
      trimBlocks: true
    }
}));

/**
 * @description 使用bodyparser router中间件
 */
app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

/**
 * @description 启动服务
 */
app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000`);
});