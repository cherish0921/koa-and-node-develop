const Router = require('koa-router');
const router = new Router();
const accountController = require('../controller/user/account.js');

router.get('/', accountController.index)
.post('/login', accountController.login)
.get('*', async (ctx, next) => {
    ctx.redirect('/');
    ctx.status = 301;
});

module.exports = router;