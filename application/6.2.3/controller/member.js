const { postaddmember, queryallmember, querybycondition } = require('../model/member.js');

/**
 * @description 新增用户
 * @param {*} ctx 
 * @param {*} next 
 */
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

const getmember = async (ctx, next) => {
    const { userName, invitorName, mobile, status, role, pageNo, pageSize} = ctx.query;
    let data = null;
    if(userName == "" && invitorName == "" && mobile == "" && status == "" && role == "" && pageNo && pageSize){ // TODO: 查询全部s
        data = await queryallmember(pageNo, pageSize);
    }else{ //TODO: 模糊搜索条件
        data = await querybycondition({userName, invitorName, mobile, status, role, pageNo, pageSize});
    }
    ctx.set('Content-Type', "application/json");
    ctx.response.body = JSON.stringify({
        code: 200,
        msg: 'success',
        data
    });
}

module.exports = {
    addmember,
    getmember
}