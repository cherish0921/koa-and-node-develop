const Router = require("koa-router");
const router = new Router();
const curriculumController = require('../controller/curriculumController'); //TODO: 全部课程内容
const teacherController = require('../controller/teacherController'); //TODO: 老师
const courseController = require('../controller/courseController'); //TODO: 课程

router.get('/curriculum', curriculumController.getcurriculum)
.post('/curriculum', curriculumController.addcurriculum)
.put('/curriculum/:id', curriculumController.updatecurriculum)
.delete('/curriculum/:id', curriculumController.deletecurriculum)
.get('/teacher', teacherController.getallteacher)
.post('/teacher', teacherController.addteacher)
.get('/course', courseController.getallcourse)
.post('/course', courseController.addcourse);


module.exports = router;