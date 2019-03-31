# koa-and-node-develop
koa和nodejs实战开发

# Yarn 模块管理工具
https://yarnpkg.com/zh-Hans/

# web代理工具nproxy
https://www.npmjs.com/package/nproxy

# 在线HTTP GET/POST请求
http://tool.chinaz.com/Tools/httptest.aspx
https://www.sojson.com/httpRequest/


# 初始化项目时
typings init

# 安装命令
typings install dt~node --global--save
//typings install dt~jquery --global --save
（–global：代表全局文件，有些包必须得加上这个参数才行）
（–save ：表示将此次的安装信息记录到上面讲的typings.json中)

# element-ui 国内站点
http://element-cn.eleme.io/#/zh-CN

# 正常连接MYSQL
mysql -u root -p

# MYSQL退出
quit

# sequelize中文文档
https://demopark.github.io/sequelize-docs-Zh-CN/

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
    * chapter5 构建koa web应用
        * 5.1.3 在koa中实现MVC
            * 分离router.js 
            * controller 进行业务逻辑部分处理
            * service 为controller提供model数据
        * 5.3.2 开发登录验证页面
        * 5.4.1 koa-json ajax响应json数据
        * 5.4.2 koa-multer 中间件实现图片文件上传、写入文件
    * application 应用章节
        * 初识sequelize 搭建数据库
        * 6.2.3 第一款Restful api应用
        * 6.2.4 多表查询(未完成)