'use strict';
const Koa = require('koa');
const app = new Koa();
const staticServe = require('koa-static');
const mount = require('koa-mount');
const render = require('koa-ejs');
const path = require('path');
const onerror = require('koa-onerror');
const staticDirectory = staticServe(__dirname + '/src/public');
const config = require('./config');
const router = require('./src/routes');

// 设置模板引擎
render(app, {
    root: path.join(__dirname, '/src/views'),
    viewExt: 'ejs',
    layout: false
});
// 错误监听，将具体错误输出到页面上
onerror(app);

app .use(mount('/static', staticDirectory))
    .use(router.routes());

app.listen(config.listenPort, '0.0.0.0');
