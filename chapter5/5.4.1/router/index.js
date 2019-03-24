const Router = require('koa-router');
const router = new Router();
const userController = require('../controller/user.js');

router.get('/', async (ctx, next) => {
    await ctx.render('./index')
}).post('/login', userController.login);

module.exports = router;