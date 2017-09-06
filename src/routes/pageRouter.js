/**
 * 页面路由
 * Created by Eragon on 2017-08-08
 */
const Router = require('koa-router');

const pageRouter = new Router();

pageRouter.get('/page', function* () {
    const params = {
        titel: 'Page Demo',
        content: 'Hello Koa!',
    };

    yield this.render('page', {
        params,
    });
});

pageRouter.get('/', function* () {
    yield this.render('demo');
});

module.exports = pageRouter;


