const koa = require('koa');
const Router = require('koa-router');
const app = new koa();
const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = `
        <nav>
            <a href="/users">users</a>
            <a href="/users/3">users/3</a>
        </nav>
    `;
    await next();
});

/**
 * @description 命名路由
 */
router.get('users', '/users/:id', async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = `
        <section>
            <nav>
                <a href="/">home</a>
            </nav>
        </section>
    `;
    await next();
});

/**
 * @description 命名路由
 */
router.get('/users/:id?', async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = `
        <section>
            <nav>
                <a href="/">home</a>
            </nav>
        </section>
    `
    await next();
});

/**
 * @description all()方法
 * @description all()方法一般用来设置请求头，如设置过期时间、CORS（Cross-Origin Resource Sharing， 跨域资源共享）等
 * @description 符号*允许来自所有域名的请求
 */

router.all('/*', async (ctx, next) => {
    console.log(`all 方法工作。。。。`);
    console.log(ctx);
    await next();
});


app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000')
});