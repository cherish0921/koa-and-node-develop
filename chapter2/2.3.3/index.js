const koa = require('koa');
const app = new koa();
const bodyParser  = require('koa-bodyparser');

app.use(bodyParser()); //TODO: 加载koa-bodyparser中间件

app.use(async (ctx) => {
    if(ctx.request.method == 'GET' && ctx.request.url == '/'){ //TODO: 首页表单页面
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
    }else if(ctx.request.method == 'POST' && ctx.request.url == '/login'){
        // 当POST请求时，中间件koa-bodyparser解析POST表单里的数据
        let postdata = ctx.request.body;
        ctx.response.type = 'json';
        ctx.response.body = postdata;
    }
});

app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running http://127.0.0.1:3000`);
});