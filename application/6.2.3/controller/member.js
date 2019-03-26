const { postaddmember } = require('../model/member.js');

const addmember = async (ctx, next) => {
    const { email, investAmount, invitorName, mobile, role, status, userName } = ctx.request.body;
    let data = await postaddmember({
        email, investAmount, invitorName, mobile, role, status, userName
    });
    ctx.set('Content-Type', "application/json");
    ctx.response.body = JSON.stringify({
        code: 200,
        msg: 'success'
    });
}

module.exports = {
    addmember 
}