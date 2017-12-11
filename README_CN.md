[English](./README_CN.md) | 简体中文

# node-server
基于 [koa 2][2] 的前后端分离项目，帮你简单迅速地搭建 node 服务器。  

## 安装
```bash
$ git clone https://github.com/Dragon-Rider/node-server.git   
$ cd  ./node-server    
$ npm install  
$ npm start  
```

## 本地运行
```
http://localhost:8080/  
http://localhost:8080/page
http://localhost:8080/ajax/userInfo
```

## 使用 PM2 来运行项目
app.json 是 PM2 的配置文件。 同时，使用`pm2-logrotate` 每天收集和切割日志。
```
$ npm install pm2 -g
$ pm2 install pm2-logrotate 
$ npm run start-pm2
```

## 相关文章
- [美团点评点餐前后端分离实践][1] 

## 版权许可证
MIT

[1]: https://zhuanlan.zhihu.com/p/28704974?group_id=884563171543744512
[2]: http://koajs.com/
