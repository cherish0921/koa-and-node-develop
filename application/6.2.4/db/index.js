const Sequelize = require('sequelize');
const sequelize = new Sequelize("test", "root", "123456", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log(`Successful database connection`);
}).catch((err) => {
    console.log(`Database connection failed:`, err);
});

/**
 * @description 定义课程表结构
 */
const curriculum = sequelize.define('curriculum', {
    timepoint: { //TODO: 上课时间段 8-21点
        type: Sequelize.INTEGER,
        validate: {
            min: 8,
            max: 21
        }
    },
    starttime: { //TODO: 上课开始时间
        type: Sequelize.DATE
    },
    endtime: { //TODO: 上课结束时间
        type: Sequelize.DATE
    },
    teacher: { //TODO: 老师
        type: Sequelize.INTEGER
    },
    course: { //TODO: 课程
        type: Sequelize.INTEGER
    },
    status: { //TODO: 状态
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1
    }   
});

/**
 * @description 定义老师表
 */
const teacher = sequelize.define('teacher', {
    teachername: { //TODO: 老师姓名不能为空
        type: Sequelize.STRING(20),
        allowNull: false
    }
});

/**
 * @description 定义课程表
 */
const course = sequelize.define('course', {
    coursename: { //TODO: 课程姓名
        type: Sequelize.STRING(20),
        allowNull: false
    }
});


// TODO: 覆盖重建表
// curriculum.sync({force: true});
// teacher.sync({force: true});
// course.sync({force: true});

module.exports = {
    curriculum,
    teacher,
    course
};