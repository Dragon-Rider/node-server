/**
 * Ajax接口路由
 * Created by Eragon on 2017-08-18
 */

const Router = require('koa-router');
const userInfoContr = require('../controllers/userInfoController');

const apiRouter = new Router({
    prefix: '/ajax',
});

apiRouter.get('/userInfo', async function (ctx, next) {
    let result = null;

    result = await userInfoContr.getUserinfo(ctx.request.ip);
    ctx.body = result;
});


module.exports = apiRouter;
