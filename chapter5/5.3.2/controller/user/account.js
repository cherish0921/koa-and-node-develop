const Service = require('../../service/user/account.js');
const accountservice = new Service();

const index = async (ctx, next) => {
    await ctx.render('./index');
}

const login = async (ctx, next) => {
    const { username, userpsd, useraddress } = ctx.request.body;
    const data = await accountservice.login(username, userpsd, useraddress);
    if (data.code == 200) {
        ctx.state = ctx.request.body;
        const userinfo = data.msg;
        await ctx.render('account/userinfo', userinfo);
    } else {
        ctx.redirect('/');
        ctx.status = 301;
    }
}

module.exports = {
    index,
    login
};