const koa = require('koa');
const app = new koa();

app.use(async (ctx) => {
    ctx.response.status = 200; //TODO:设置响应的状态码为200
    /** 
    TODO: false
    console.log(ctx.response.is('json')); 
    console.log(ctx.response.is('html'));
    console.log(ctx.response.is('text'));
     */
    if(ctx.request.accepts('json')){ //TODO:客户端类型JSON
        ctx.response.type = 'json';
        ctx.response.body = {date: 'Hello World!'};
    }else if(ctx.request.accepts('html')){ //TODO:客户端类型HTML
        ctx.response.type = 'html';
        ctx.response.body = '<h1>Hello World!</h1>'
    }else{ //TODO:客户端类型text文本
        ctx.response.type = 'text';
        ctx.response.body = 'Hello World!';
    }
});

app.listen(3000,'localhost', () => {
    console.log(`Server running http://localhost:3000`)
});