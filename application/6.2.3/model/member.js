const member = require('../db');
const { Op } = require('sequelize');

/**
 * @description 创建用户
 * @param {Object} params 
 */
async function postaddmember(params) {
    return member.create(params);
}

/**
 * @description 查询全部用户
 */
async function queryallmember(pageNo, pageSize){ 
    return member.findAndCountAll({
        attributes: ['id', 'userName', 'mobile', 'createdAt', 'invitorName', 'role', 'status'],
        order: [
            ['createdAt', 'DESC']
        ],
        offset: (Number.parseInt(pageNo) -1) * Number.parseInt(pageSize),
        limit: Number.parseInt(pageSize)
    });
}

/**
 * @description 模糊条件查询用户
 * @param {} reset 
 */
async function querybycondition(reset){
    const { userName, invitorName, mobile, status, role, pageNo, pageSize } = reset;
    return member.findAndCountAll({
        attributes: ['id', 'userName', 'mobile', 'createdAt', 'invitorName', 'role', 'status'],
        order: [
            ['createdAt', 'DESC']
        ],
        where: {
            userName: {
                [Op.like]: `${userName}%`
            },
            invitorName: {
                [Op.like]: `${invitorName}%`
            },
            mobile: {
                [Op.like]: `${mobile}%`
            },
            status: String(status),
            role: String(role)
        },
        offset: (Number.parseInt(pageNo) -1) * Number.parseInt(pageSize),
        limit: Number.parseInt(pageSize)
    });
}

/**
 * @description 根据用户ID更改用户信息
 * @param {*} id 
 * @param {*} obj 
 */
async function updatemember(id, obj){
    const item = await member.findById(id);
    if(item){
        return item.update(obj);
    }else{
        throw new Error(`No data found for ID=${id}`);
    }
}

/**
 * @description 删除数据
 * @param {Number} id 
 */
async function deletemember(id){
    const item = await member.findById(id);
    if(item){
        return item.destroy();
    }else{
        throw new Error(`No data found for ID=${id}`);
    }
}

module.exports = {
    postaddmember,
    queryallmember,
    querybycondition,
    updatemember,
    deletemember
}