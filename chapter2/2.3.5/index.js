const koa = require('koa');
const views = require('koa-views');
const path = require('path');
const bodyParse = require('koa-bodyparser');
const static = require('koa-static');
const Router = require('koa-router');
const app = new koa();
const router = new Router();

/**
 * @description 加载模板引擎
 */
app.use(views(__dirname + '/views', {
    map: {
        html: 'ejs'
    }
}));

/**
 * @description 加载静态资源
 */
app.use(static(
    path.join(__dirname, '/static')
));

router.get('/', async(ctx, next) => {
    await ctx.render('index');
});

router.post('/login', (ctx, next) => {
    console.log(ctx.request.body);
});

app.use(bodyParse()).use(router.routes()).use(router.allowedMethods());

app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running http://127.0.0.1:3000`);
});