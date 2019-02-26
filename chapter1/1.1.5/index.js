const http = require('http'); //TODO:HTTP服务器与客户端模块
const path = require('path'); //TODO:该模块提供了处理文件与目录的工具函数
const url = require('url'); //TODO:该模块用于URL处理与解析
const fs = require('fs'); //TODO:文件系统模块

const hostname = '127.0.0.1';
const port = 1000; 

const server = http.createServer((req,res) => { //TODO: 创建http Server服务
    const pathname = url.parse(req.url).pathname; //TODO:通过URL获取路径path
    const extname = path.extname(pathname); //TODO: 通过路径获取扩展名
    if(pathname == '/'){ //TODO: index.html
        // TODO: path.join(__dirname, pathname)表示当前文件夹路径 例：d:\workproject\koaandnode\chapter1\1.1.5\
        res.writeHead(200, {"Content-Type": 'text/html'});
        res.end(fs.readFileSync(path.join(__dirname, pathname, 'index.html')));
    }else if(extname.endsWith('.png') || extname.endsWith('.jpg')){
        // TODO: path.join(__dirname, pathname)表示当前文件夹路径 例：d:\workproject\koaandnode\chapter1\1.1.5\images\GDC.png
        res.writeHead(200, {"Content-Type": `image/${extname.slice(1)}`});
        res.end(fs.readFileSync(path.join(__dirname, pathname)));
    }else{ //未满足要求的请求，返回404
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port, hostname, () => { //开启http服务器监听连接
    console.log(`Server running at http://${hostname}:${port}`);
});