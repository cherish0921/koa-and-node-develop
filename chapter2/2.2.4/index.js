const koa = require('koa');
const app = new koa();

app.use(async (ctx) => {
    if(ctx.request.method == 'POST'){ //TODO: POST请求

    }else if(ctx.request.method == 'GET'){ //TODO: GET请求
        if(ctx.request.path == '/'){ //TODO: 首页
            ctx.response.type = 'text/html';
            ctx.response.body = '<h4>Hello World!</h4>';
        }else{ //TODO: 其他页面
            ctx.response.type = 'text/html';
            ctx.response.body = '<a href="/">Go to index!</a>';
        }
    }
});

app.listen(3000, 'localhost', () => {
    console.log(`server running http://localhost:3000`);
});