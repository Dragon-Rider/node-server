const Router = require('koa-router');

const router = new Router();
const pageRouter = require('./pageRouter');
const apiRouter = require('./apiRouter');

router
    .use(pageRouter.routes())
    .use(apiRouter.routes());


module.exports = router;
