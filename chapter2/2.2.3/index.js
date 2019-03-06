const koa = require('koa');
const app = new koa();

app.use(async (ctx) => {
    let postdata = '';
    ctx.req.on('data', (chunk) => { //TODO: 监听data事件
        postdata += chunk; //TODO: 拼装POST请求的参数
    })
    ctx.req.on('end', () => { //TODO: 监听end结束事件
        console.log('post 参数为： ');
        console.log(postdata);
    });
})

app.listen(3000, '192.168.103.19', () => {
    console.log(`server running http://192.168.103.19:3000`)
});