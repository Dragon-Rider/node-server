/**
 * 页面路由
 * Created by Eragon on 2017-08-08
 */
const Koa = require('koa');
const Router = require('koa-router');
const pageRouter = new Router();

pageRouter.get('/page', function *(next) {
    const params = {
        titel: 'Page Demo',
        content: 'Hello Koa!'
    };

    yield this.render('page', {
        params
    });
});

module.exports = pageRouter;
