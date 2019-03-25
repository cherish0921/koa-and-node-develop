const fs = require('fs');
const path = require('path');

const profile = async (ctx, next) => {
    const { originalname, path: out_path, mimetype, filename } = ctx.req.file;
    let newName = out_path + path.parse(originalname).ext;
    let newUrl = filename + path.parse(originalname).ext;
    let err = fs.renameSync(out_path, newName);
    let result;
    if (err) {
        result = JSON.stringify(err);
    } else {
        result = {
            code: 200,
            msg: {
                url: `http://127.0.0.1:3000/user_upload/${newUrl}`,
                imagename: newUrl
            }
        };
    }
    ctx.response.body = result;
}

module.exports = {
    profile
}