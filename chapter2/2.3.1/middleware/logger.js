async function logger(ctx,next){
    console.log(`method: ${ctx.request.method}`);
    console.log(`host: ${ctx.request.host}`);
    console.log(`ip: ${ctx.request.ip}`);
    console.log(`url: ${ctx.request.url}`);
    await next();
    console.log('logger ending.....');
}

module.exports = {
    logger
}