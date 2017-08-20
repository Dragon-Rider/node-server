/**
 * Ajax接口路由
 * Created by Eragon on 2017-08-08
 */

const Router = require('koa-router');
const ENUM = require('../common/ENUM');
const ipInfoContr = require('../controllers/ipInfoController');

const apiRouter = new Router({
    prefix: '/ajax',
});

apiRouter.get('/province/list', function() {
    const result = {
        code: ENUM.RET_SUCCESS.code,
        msg: ENUM.RET_SUCCESS.msg,
        data: [{
            id: 001,
            name: 'option1',
        }, {
            id: 002,
            name: 'option2',
        }, {
            id: 003,
            name: 'option3',
        }]
    };

    this.body = result;
});

apiRouter.get('/ipInfo', function* () {
    let result = null;

    result = yield ipInfoContr.getIpInfo(this.request.ip);

    this.body = result;
});

module.exports = apiRouter;
