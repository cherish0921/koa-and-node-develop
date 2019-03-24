const userService = require('../service/user.js');

const login = async (ctx, next) =>{
    const { email, username, userpsd } = ctx.request.body;
    const data = await userService.login(email, username, userpsd);
    ctx.send(data);
}

module.exports = {
    login
}