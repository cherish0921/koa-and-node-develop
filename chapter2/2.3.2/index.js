const koa = require('koa');
const app = new koa();


/**
 * @description 删除第一个中间件的next();方法
 * @description 会导致后续中间件无法执行
 */
app.use(async (ctx, next) => {
    const startTime = new Date().getTime(); //TODO: 1.记录开始时间
    await next(); //TODO: 2.控制权往下一个中间件传递
    const endTime = new Date().getTime(); //TODO: 6记录结束时间，执行后续操作
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello World!</h1>';
    console.log(`请求地址：${ctx.request.path}，响应时间：${endTime - startTime} ms`);
});

app.use(async (ctx, next) => {
    console.log('中间件 dosoming'); //TODO: 3. 输出
    /**
     * @description TODO: 4.控制权往下一个中间件传递
     * @description 如：有中间件，则进行传递
     * @description 无一层一层返回，直到第一个起始中间件
     */
    await next(); 
    console.log('中间件 over'); //TODO: 5.开始返回
});

app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running http://127.0.0.1:3000`);
});