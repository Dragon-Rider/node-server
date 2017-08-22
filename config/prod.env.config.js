'use strict'

// MySql配置
const mysqlConfig = {
    host: '127.0.0.1',
    user: '你的用户名',
    password: '你的密码',
    database: '你的数据库名字',
    port: 3306
};

// app运行端口号
const listenPort = 8080;

module.exports = {
    mysqlConfig,
    listenPort
}
