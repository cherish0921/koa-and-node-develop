const homeService = require('../service/home.js');

const index =  async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = `
        <div id="app">
            <h1>Hello World!</h1>
            <div><a href="/home">home</a></div>
        </div>
    `
};

const home = async (ctx, next) => {
    console.log(ctx.request.query);
    console.log(ctx.request.querystring);
    ctx.response.type = 'text/html';
    ctx.response.body = `
        <div id="app">
            <a href="/home/1/2">/home/1/2</a>
            <a href="/home/3/4">/home/3/4</a>
        </div>
    `
}

const homeParams = async (ctx, next) => {
    console.log(ctx.params);
    ctx.response.type = 'text/html';
    ctx.response.body = `
        <div id="app">
            <form method="POST" action="/login">
                <div class="form-item">
                    <label for="username"> 
                        名字：<input type="text" name="username" id="username"/>
                    </label>
                </div>
                <div class="form-item">
                    <label for="address"> 
                        地址：<input type="text" name="address" id="address"/>
                    </label>
                </div>
                <div class="form-item">
                    <button type="submit">提交</button>
                </div>
            </form>
        </div>
    `
};

const login = async (ctx, next) => {
    let { username, address } = ctx.request.body;
    let body = await homeService.login(username, address);
    console.log('login.....')
    console.log(body);
    ctx.response.type = 'text/html';
    ctx.response.body = body;
}

module.exports = {
    index,
    home,
    homeParams,
    login
}