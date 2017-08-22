/**
 * Ajax接口路由
 * Created by Eragon on 2017-08-18
 */

const Router = require('koa-router');
const userInfoContr = require('../controllers/userInfoController');

const apiRouter = new Router({
    prefix: '/ajax',
});

apiRouter.get('/userInfo', function* () {
    let result = null;

    result = yield userInfoContr.getUserinfo(this.request.ip);

    this.body = result;
});


module.exports = apiRouter;
