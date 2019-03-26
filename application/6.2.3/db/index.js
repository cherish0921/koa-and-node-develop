const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('数据库连接成功....');
}).catch((err) => {
    console.log('连接失败: ', err);
});

const member = sequelize.define('hee_member', {
    email: Sequelize.STRING, //TODO: String类型
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    investAmount: { //TODO: 投资金额
        type: Sequelize.STRING, //TODO: String类型
        allowNull: false //TODO: 不能为空
    },
    invitorName: Sequelize.STRING, //TODO: 邀请人
    mobile: { //TODO: 手机号
        type: Sequelize.STRING,
        allowNull: false
    },
    role: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    status: { 
        type: Sequelize.STRING,
        allowNull: false
    }
});

member.sync({force: true});

module.exports = member;