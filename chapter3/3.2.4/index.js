const koa = require('koa');
const Router = require('koa-router');
const { sign } = require('jsonwebtoken'); //TODO: 获取sign方法
const secret = 'test'; //TODO: 设置密钥
const jwt = require('koa-jwt')({secret});
const bodyParser = require('koa-bodyparser');
jwt.unless({ path: ['/api/']});

const router = new Router({
    prefix: '/api' //TODO: 路由前缀
});

const app = new koa();

router.use(async (ctx, next) => {
    console.log(ctx);
    next();
});

router.get('/', async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = `
        <form method="POST"  action="/api/login">
            <div class="form-item">
                <label for="username">
                    用户名：<input name="username" id="username" placehodler="请输入用户名"/>
                </label>
            </div>
            <div class="form-item">
                <label for="age">
                    年龄：<input name="age" id="age" placehodler="请输入年龄"/>
                </label>
            </div>
            <div class="form-item">
                <label for="address">
                    地址：<input name="address" id="address" placehodler="请输入地址"/>
                </label>
            </div>
            <div class="form-item">
                <button type="submit">提交</button>
            </div>
        </form>
    `
}).post('/login', async (ctx, next) => {
    const user = ctx.request.body; //TODO: 获取用户提交信息 {username: "wangkx", age: "27"}
    if(user && user.username){
        let { username, age,  address } = user; //TODO: 获取输入用户名
        // TODO: 生成Token，secret作为密钥，expiresIn为失效时间
        const token = sign({username}, secret, { expiresIn: '1h' });
        ctx.cookies.set('token', token, {
            maxAge: 60*60*1000, //TODO: 过期时间1h
            expires: new Date(new Date().getTime() + 60*60*1000),
            path: '/',
            httpOnly: true, //TODO: 无法被js读取
            overwrite: true //TODO: 覆盖同名token
        });
        ctx.state.user = {
            username
        };
        ctx.response.type = 'text/html';
        ctx.response.body = `
            <ul>
                <li>用户名：${username}</li>
                <li>年  龄：${age}</li>
                <li>地  址：${address}</li>
                <li>token：${token}</li>
                <li><a href="/api/userInfo">获取用户信息</a></li>
            </ul>
        `
    }else{ //TODO: 用户名为输入完整
        ctx.response.type = 'text/html';
        ctx.response.body = `
            <ul>
                <li>用户信息未输入完整</li>
            </ul>
        `
    }
}).get('/userInfo', jwt, async (ctx, next) => {
    console.log(ctx.state);
});

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000/api`);
})