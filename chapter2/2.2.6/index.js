const koa = require('koa');
const app = new koa();

app.use(async (ctx) => {
    ctx.state.user = {
        name: 'kaixiang',
        age: 27,
        birthday: 0921
    }
    if(ctx.request.method == "GET"){
        ctx.response.type = 'text/html';
        if(ctx.request.path == '/'){
            ctx.response.body = `
                <ul>
                    <li>用户名：${ctx.state.user.name}</li>
                    <li>年龄：${ctx.state.user.age}</li>
                    <li>生日：${ctx.state.user.birthday}</li>
                </ul>
            `;
        }else{
            ctx.response.body = `go to <a href="/">Home</a>`;
        }
    }
});

app.listen(3000, 'localhost', () => {
    console.log('Server running http://localhost:3000');
});