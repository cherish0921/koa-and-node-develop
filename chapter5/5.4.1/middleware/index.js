module.exports = () => {
    function render(json){
        this.set('Content-Type', "application/json");
        this.body = JSON.stringify(json);
    }
    return async (ctx, next) => {
        ctx.send = render.bind(ctx); //TODO: send函数将JSON对象转化为字符串
        await next();
    }
}