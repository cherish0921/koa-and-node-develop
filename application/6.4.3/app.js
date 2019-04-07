const koa = require("koa");
const app = new koa();
const session = require("koa-session");
const redis = require("redis");
const client = redis.createClient(6379, '127.0.0.1');
const { promisify } = require("util");
const hgetAsync = promisify(client.get).bind(client);
client.on('Error', (err) => {
    console.log(err);
});

app.keys = ['some secret hurr'];
app.use(session({
  key: 'token', 
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    store: {
        async get(key, maxAge){
            return await hgetAsync(key);
        },
        set(key,sess,maxAge){
            client.set(key, sess.views, redis.print);
        },
        destroy(key){
            client.hdel(key);
        }
    }
}, app));

app.use(async ctx => {
    let n =  0, cachetimes = await hgetAsync(ctx.cookies.get('token'));
    if(cachetimes){
        n = cachetimes;
    }
    ctx.session.views = ++n;
    ctx.response.type = 'text/html';
    ctx.response.body = `   
        <h5>Hello world ${ctx.session.views} times!</h5>
    `;
});

app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000`);
});