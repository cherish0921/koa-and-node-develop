const Router = require('koa-router');
const router = new Router();
 
router.get('/', async (ctx, next) => {
    await ctx.render('./index');
}).get('/login', async (ctx, next) => {
    await ctx.render('user/login', {
        submittitle: '提交'
    });
});

module.exports = router;