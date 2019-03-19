# koa-and-node-develop
koa和nodejs实战开发

# Yarn 模块管理工具
https://yarnpkg.com/zh-Hans/

# web代理工具nproxy
https://www.npmjs.com/package/nproxy

# 在线HTTP GET/POST请求
http://tool.chinaz.com/Tools/httptest.aspx
https://www.sojson.com/httpRequest/

* koa与node.js实战代码
    * chapter1 node.js入门
        * 1.1.5 使用node.js搭建一个http server(kindle position: 373)
    * chapter2 遇见koa
        * 2.1.1 使用koa2编写 Hello-World示例
        * 2.2.2 Context 对象介绍 Get请求
        * 2.2.3 Context 对象介绍 POST请求
        * 2.2.4 ctx.request处理路由
        * 2.2.5 ctx.response
        * 2.2.6 ctx.state 
            * 通过中间件传递信息到前端视图
        * 2.2.7 ctx.cookies + ctx.throw
            * 获取和设置cookie
            * ctx.throw 主动向用户抛出错误
        * 中间件
            * 2.3.1 初始中间件
                * logger日志中间件
            * 2.3.2 获取服务器响应时间
            * 2.3.3 
                * koa-bodyparser中间件解析form表单数据
            * 2.3.4
                koa-router 路由
            * 2.3.5(暂无实际效果)
                koa-static + koa-views 渲染页面
    * chapter3 koa-router路由中间件
        * 3.1.1 restful API设计使用 GET、POST、PUT、DELETE方法
        * 3.2.3 koa-router用法及router.all()方法
        * 3.2.4 koa-jwt+jsonwebtoken生成token (未完整)
        