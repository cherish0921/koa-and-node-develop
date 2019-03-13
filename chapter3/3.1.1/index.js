const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const app = new koa();
const router = new Router();

router.get('/users/:id', (ctx, next) => {
    console.log(`我是编号ID为：${ctx.params.id}的用户信息`);
    ctx.response.type = 'text/html';
    ctx.response.body = `
        <div>
            <h1>登录</h1>
            <form method="put" action="/users/${ctx.params.id}">
                <p>用户名</p>
                <input name="userName" type="text"/>
                <p>密码</p>
                <input name="passWord" type="password"/>
                <button type="submit">登录</button>
            </form>
        </div>
    `
}).post('/users/:id', (ctx, next) => {
    console.log('新增了一个用户');
    let postdata = ctx.request.body;
    ctx.response.type = 'text/html';
    ctx.response.body = `
        <div>
            <h4>新增了一个用户ID：${ctx.params.id}的用户</h4>
            <h5>${JSON.stringify(postdata)}</h5>
        </div>
    `
}).put('/users/:id', (ctx, next) => {
    console.log('修改用户编号id：${ctx.params.id}的用户');
    let postdata = ctx.request.body;
    ctx.response.type = 'text/html';
    ctx.response.body = `
        <div>
            <h4>修改用户编号id：${ctx.params.id}的用户</h4>
            <h5>${JSON.stringify(postdata)}</h5>
        </div>
    `
}).del('/users/:id', (ctx, next) => {
    console.log('删除用户编号id：${ctx.params.id}的用户');
    let postdata = ctx.request.body;
    ctx.response.type = 'text/html';
    ctx.response.body = `
        <div>
            <h4>删除用户编号id：${ctx.params.id}的用户</h4>
            <h5>${JSON.stringify(postdata)}</h5>
        </div>
    `
});

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(3000, '127.0.0.1', () => {
    console.log('Server running http://127.0.0.1:3000/users/12');
});