const Sequelize = require('sequelize');
/**
 * @params {String} databaseName 数据库名称
 * @params {String} username 用户名
 * @params {String} userpsd 密码
 */
const sequelize = new Sequelize('test', 'root', '123456', {
    host: 'localhost', //TODO: 数据库服务地址
    dialect: 'mysql' //TODO: SQL语言类型
});

/**
 * @description 校验数据库连接
 */
sequelize.authenticate().then(() => {
    console.log('连接成功....');
}).catch(err => {
    console.error('连接失败....');
});

/**
 * @description 定义user的模型
 */
const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING //TODO: 指定String字符串类型
    },
    lastName: {
        type: Sequelize.STRING //TODO: 指定String字符串类型
    }
});

/**
 * @description force: true 如果表已经存在，将会丢弃表
 * 强制同步
 */
User.sync({ force: true }).then(() => {
    //TODO 表已创建
    console.log('user表已创建....');
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});

/**
 * @description 定义project模型
 */
const Project = sequelize.define('project', {
    name: { //TODO: 定义name字段
        type: Sequelize.STRING, //TODO: 类型为string
        allowNull: false, //TODO: 不能为空
        unique: true //TODO: 必须唯一不允许重复
    },
    date: { //TODO: 定义date字段
        type: Sequelize.DATE, //TODO: 类型为时间
        defaultValue: Sequelize.NOW //TODO: 默认为当前时间
    }   
});

/**
 * @description 如果已存在project表
 * force: true 则进行强制同步
 */
Project.sync({force: true}).then(() => {
    console.log('project表已创建....');
    return Project.create({
        name: 'kaixiang'
    });
});