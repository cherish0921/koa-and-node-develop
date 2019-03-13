const koa = require('koa');
const app = new koa();

app.use(async (ctx) => {
    if(ctx.request.method == 'GET'){
        ctx.response.type = 'text/html';
        ctx.cookies.set('token', Math.random().toString(12).slice(2), {
            maxAge: 86400000*2, //TODO: 过期时间2天
            // signed: Math.random().toString(12).slice(2), //TODO: 签名值
            expires: new Date(new Date().getTime() + 86400000*2), //TODO: 过期的date
            path: '/', //TODO: cookie的路径
            domain: '127.0.0.1', //TODO: cookie的域名
            httpOnly: true, //TODO: 无法被JavaScript获取到
            overwrite: true //TODO: 覆盖同名cookie
        });
        if(ctx.request.path == '/'){
            ctx.response.body = `
                <div>
                    <ul>
                        <li>cookie键名：token</li>
                        <li>cookie value：${ctx.cookies.get('token')}</li>
                    </ul>
                </div>
            `
        }else{
            // TODO: 非首页向用户抛出错误
            ctx.throw(500);
        }
    }
});

app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running http://127.0.0.1:3000`)
});