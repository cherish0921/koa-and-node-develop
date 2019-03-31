const teacherModel = require('../model/teacher');

/**
 * @description 获取全部教师
 * @param {*} ctx 
 * @param {*} next 
 */
const getallteacher = async (ctx, next) => {
    const data = await teacherModel.allteacher();
    ctx.response.body = JSON.stringify({
        code: 200,
        msg: 'success',
        data
    });
}

/**
 * @description 新增老师
 * @param {*} ctx 
 * @param {*} next 
 */
const addteacher = async (ctx, next) => {
    const { teachername } = ctx.request.body;
    if(teachername){
        await teacherModel.newteacher({teachername});
        ctx.response.body = JSON.stringify({
            code: 200,
            msg: 'success'
        });
    }else{
        ctx.response.body = JSON.stringify({
            code: -1,
            msg: 'teachername is a must'
        });
    }
}

module.exports = {
    getallteacher,
    addteacher
};