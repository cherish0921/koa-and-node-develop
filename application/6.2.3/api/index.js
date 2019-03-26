const Router = require('koa-router');
const router = new Router();
const memberController = require('../controller/member.js');

router.post('/member', memberController.addmember);

module.exports = router;