const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = `
        <div>
            <h1>登录</h1>
            <form method="POST" action="/login">
                <p>用户名</p>
                <input name="userName" type="text"/>
                <p>密码</p>
                <input name="passWord" type="password"/>
                <button type="submit">登录</button>
            </form>
        </div>
    `
});

router.post('/login', (ctx, next) => {
    const postdata = ctx.request.body;
    ctx.response.type = 'json';
    ctx.response.body = postdata;
});

/**
 * @description bodyParser()加载koa-bodyparser
 * @description router.routes()加载koa-router
 * @description router.allowedMethods()对异常状态处理
 */
app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(3000, '127.0.0.1', () => {
    console.log('Server running http://127.0.0.1:3000');
});