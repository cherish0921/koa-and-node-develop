const { Op } = require('sequelize');
const { curriculum } = require('../db');

/**
 * @description 分页查询全部
 * @param {*} pageNo 
 * @param {*} pageSize 
 */
async function queryallcurriculum(pageNo, pageSize){
    return curriculum.findAndCountAll({
        attributes: ['starttime', 'endtime', 'teacher', 'course', 'status'],
        order: [
            ['createdAt', 'DESC']
        ],
        offset: (Number(pageNo) - 1) * pageSize,
        limit: pageSize
    });
}

/**
 * @description 指定条件查询
 * @param {*} obj 
 */
async function querycurriculum(obj){
    /*
    formInline: {
                        starttime: '',
                        endtime: '',
                        teacher: '',
                        course: '',
                        status: '',
                        pageNo: 1,
                        pageSize: 10
                    },
    */
    const {starttime, endtime, teacher } = obj;
    
}

/**
 * @description 创建课程
 * @param {*} obj 
 */
async function newcurriculum(obj){
    return curriculum.create(obj);
}

module.exports = {
    newcurriculum
}