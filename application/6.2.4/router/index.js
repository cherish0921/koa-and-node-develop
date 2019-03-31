const Router = require("koa-router");
const router = new Router();

router.get('/', async (ctx, next) => {
    await ctx.render('./index', {
        title: '课程表'
    });
});

module.exports = router;