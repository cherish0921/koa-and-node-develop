/**
 * @description 日志公共参数配置
 */
const logconfig = { 
    apploglevel: process.env.apploglevel || 'debug', //TODO: 日志级别
    dir: process.env.NODE_ENV || 'develop', //TODO: 指定日志存放目录名
    env: process.env.NODE_ENV || 'develop', //TODO: 指定当前环境 
    projectname: process.env.projectname || 'koa2-log4js', //TODO: 指定项目名称
    serverip: process.env.serverip || '127.0.0.1' //TODO: 默认服务器IP
} 

module.exports = logconfig;