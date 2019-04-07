const Router = require('koa-router');
const router = new Router();
const HomeController = require('../controller/home');

router.get('/', HomeController.index);
router.get('/home', HomeController.home);
router.get('/home/:id/:name', HomeController.homeParams);
router.get('/user', HomeController.login);
router.post('/user/register', HomeController.register);

module.exports = router;
