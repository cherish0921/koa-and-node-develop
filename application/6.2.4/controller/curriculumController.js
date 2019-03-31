const curriculumModel = require('../model/curriculum');

/**
 * @description 获取课程
 * @param {*} ctx 
 * @param {*} next 
 */
const getcurriculum = async (ctx, next) => {
    const {starttime, endtime, teacher, course, status, pageNo, pageSize} = ctx.request.body;
}

/**
 * @description 新增课程
 * @param {*} ctx 
 * @param {*} next 
 */
const addcurriculum  = async (ctx, next) => {
    let { timepoint, starttime: inputstarttime, endtime: inputendtime, teacher, course, status} = ctx.request.body;
    let starttime = new Date(), endtime = new Date(), starttimeval = inputstarttime.split(':'), endtimeval = inputendtime.split(':');
    starttime.setHours(starttimeval[0]);
    starttime.setMinutes(starttimeval[1]);
    starttime.setSeconds('00');
    endtime.setHours(endtimeval[0]);
    endtime.setMinutes(endtimeval[1]);
    endtime.setSeconds('59');
    await curriculumModel.newcurriculum({
        timepoint: Number.parseInt(timepoint), 
        starttime, 
        endtime, 
        teacher: Number.parseInt(teacher), 
        course: Number.parseInt(course), 
        status: Number.parseInt(status)
    });
    ctx.response.body = JSON.stringify({
        code: 200,
        msg: 'success'
    });
}

/**
 * @description 更新课程
 * @param {*} ctx 
 * @param {*} next 
 */
const updatecurriculum = async (ctx, next) => {

}

/**
 * @description 删除课程
 * @param {*} ctx 
 * @param {*} next 
 */
const deletecurriculum = async (ctx, next) => {

}

module.exports = {
    getcurriculum,
    addcurriculum,
    updatecurriculum,
    deletecurriculum
}