'use strict';
const Koa = require('koa');
const staticServe = require('koa-static');
const mount = require('koa-mount');
const render = require('koa-ejs');
const path = require('path');
const logger = require('koa-logger');
const onerror = require('koa-onerror');

const staticDirectory = staticServe(__dirname + '/src/public');
const router = require('./src/routes');
const config = require('./config');
const app = new Koa();

// 设置模板引擎
render(app, {
    root: path.join(__dirname, '/src/views'),
    viewExt: 'ejs',
    layout: false
});

// 错误监听
onerror(app);

app .use(logger())
    .use(mount('/static', staticDirectory))
    .use(router.routes());

app.listen(config.listenPort, '0.0.0.0');
