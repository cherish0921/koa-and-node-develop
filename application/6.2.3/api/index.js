const Router = require('koa-router');
const router = new Router();
const memberController = require('../controller/member.js');

router.get('/member', memberController.getmember);
router.post('/member', memberController.addmember);
router.put('/member/:id', memberController.updatemenberhandle);
router.delete('/member/:id', memberController.deletememberbyId);

module.exports = router;