const { course } = require('../db');
 
/**
 * @description 返回所有课程
 */
async function allcourse(){
    return course.findAndCountAll();
}

/**
 * @description 添加课程
 * @param {Object} obj 
 */
async function newcourse(obj){
    return course.create(obj);
}

module.exports = {
    allcourse,
    newcourse
}