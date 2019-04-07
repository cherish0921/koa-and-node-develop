const koa = require("koa");
const app = new koa();
const path = require("path");
const static = require("koa-static");
const middleware = require("./middleware");
const koaNunjucks = require('koa-nunjucks-2');
const router = require('./router');

/**
 * @description 加载静态资源等中间件
 */
app.use(middleware.mihttperror({
    errorPageFolder: path.resolve(__dirname, 'errorPage')
})).use(middleware.milog()).use(static(path.resolve(__dirname, 'public'), {
    maxAge: 3600000*2
})).use(koaNunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
        trimBlocks: true
    }
})).use(router.routes()).use(router.allowedMethods());

/**
 * @description 通过EventEmitter触发error
 * 异常未被处理及错误码在500以下，统一处理为500
 */
app.on('error', (err, ctx) => {
    if(ctx && !ctx.headerSent && ctx.status < 500){
        ctx.status = 500;
    };
    if(ctx && ctx.log && ctx.log.error){
        if(!ctx.state.logged){
            ctx.log.error(err.stack);
        }
    }
});

app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000`);
});