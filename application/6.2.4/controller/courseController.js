const courseModel = require('../model/course');

/**
 * @description 获取全部课程字典
 * @param {*} ctx 
 * @param {*} next 
 */
const getallcourse = async (ctx, next) => {
    const data = await courseModel.allcourse();
    ctx.response.body = JSON.stringify({
        code: 200,
        msg: 'success',
        data
    });
}

/**
 * @description 新增课程
 * @param {*} ctx 
 * @param {*} next 
 */
const addcourse = async (ctx, next) => {
    const { coursename } = ctx.request.body;   
    if(coursename){
        await courseModel.newcourse({ coursename });
        ctx.response.body = JSON.stringify({
            code: 200,
            msg: 'success'
        });
    }else{
        ctx.response.body = JSON.stringify({
            code: -1,
            msg: 'coursename is a must'
        });
    }   
}

module.exports = {
    getallcourse,
    addcourse
}