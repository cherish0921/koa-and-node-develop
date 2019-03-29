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

async function querybycondition(reset){
    const likestrarr = [ 'userName', 'invitorName' ];
    Object.keys(reset).forEach(key => {
        console.log(key);
        if(reset[key]){
            console.log('...........');
            console.log(reset[key]);
        }
    });
}

module.exports = {
    postaddmember,
    queryallmember,
    querybycondition
}