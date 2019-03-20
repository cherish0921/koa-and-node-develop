const Router = require('koa-router');
const router = new Router();
const homeController = require('../controller/home.js');

router.get('/', homeController.index)
.get('/home', homeController.home)
.get('/home/:id/:name', homeController.homeParams)
.post('/login', homeController.login);

module.exports = router;