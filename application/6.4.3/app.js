const koa = require("koa");
const app = new koa();
const session = require("koa-session");
const redis = require("redis");
const client = redis.createClient(6379, '127.0.0.1');
client.on('Error', (err) => {
    console.log('Error:', err);
});

app.keys = ['some secret hurr'];
const config = {
    key: 'myAppSesskey', 
    maxAge: 86400000,
    overwrite: true, 
    httpOnly: true, 
    signed: true, 
    store: { //TODO: 配置store配置支持redis
        async get(key, maxAge){
            return await client.hgetall(key);
        },
        set(key, sess, maxAge){
            client.hmset(key, sess.views, redis.print);
        },
        destroy(key){
            client.hdel(key)
        }
    }
}

app.use(session(config, app));

app.use(ctx => {
    if (ctx.path === '/favicon.ico') return; //TODO: 过滤掉favicon.ico的访问
    let n = ctx.session.views || 0; //TODO: 初始化访问次数
    ctx.session.views = ++n; //TODO: 记录用户访问次数
    ctx.body = n +' views'; //TODO: 前端页面显示访问次数
});

app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000`);
});