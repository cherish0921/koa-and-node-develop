const { teacher } = require('../db');

/**
 * @description 获取所有老师
 */
async function allteacher(){
    return teacher.findAndCountAll();
}

/**
 * @description 新增老师
 * @param {*} obj 
 */
async function newteacher(obj){
    return teacher.create(obj);
}

module.exports = {
    allteacher,
    newteacher
}