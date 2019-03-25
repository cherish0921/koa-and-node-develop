const Router = require('koa-router');
const router = new Router();
const multer = require('koa-multer');
const path = require('path');
const upload = multer({ 
    dest: path.resolve(__dirname, '../static/user_upload/') //TODO: 指定存储文件的位置
});
const types = upload.single('file'); //TODO: 接收接口参数名
const uploadController = require('../controller/upload.js');

router.get('/', async (ctx, next) => {
    await ctx.render('./index');
}).post('/profile', types, uploadController.profile);

module.exports = router;