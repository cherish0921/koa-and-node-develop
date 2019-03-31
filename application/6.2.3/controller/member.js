const { postaddmember, queryallmember, querybycondition, updatemember, deletemember } = require('../model/member.js');

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

/**
 * @description 查询用户
 * @param {*} ctx 
 * @param {*} next 
 */
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

/**
 * @description 更新用户操作
 * @param {*} ctx 
 * @param {*} next 
 */
const updatemenberhandle = async (ctx, next) => {
    const id = Number.parseInt(ctx.params.id);
    const { email, investAmount, invitorName, mobile, role, status, userName } = ctx.request.body;
    if(id <=0 || id == null || id == ""){
        ctx.response.body = JSON.stringify({
            code: -1,
            msg: 'Missing required value ID'
        });
    }else{
        await updatemember(id, { email, investAmount, invitorName, mobile, role, status, userName });
        ctx.response.body = JSON.stringify({
            code: 200,
            msg: 'update completed'
        });
    }
}

const deletememberbyId = async (ctx, next) => {
    const id = Number.parseInt(ctx.params.id);
    if(id <=0 || id == null || id == ""){
        ctx.response.body = JSON.stringify({
            code: -1,
            msg: 'Missing required value ID'
        });
    }else{
        await deletemember(id);
        ctx.response.body = JSON.stringify({
            code: 200,
            msg: 'delete completed'
        });
    }
}

module.exports = {
    addmember,
    getmember,
    updatemenberhandle,
    deletememberbyId
}