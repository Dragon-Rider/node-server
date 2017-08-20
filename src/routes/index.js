const Router = require('koa-router');

// 页面路由
const pageRouter = require('./pageRouter');
const apiRouter = require('./apiRouter');

const router = new Router();

router
    .use(pageRouter.routes())
    .use(apiRouter.routes());

module.exports = router;
