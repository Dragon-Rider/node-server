/**
 * 页面路由
 * Created by Eragon on 2017-08-08
 */
const Router = require('koa-router');

const pageRouter = new Router();

pageRouter.get('', async (ctx, next) => {
    await ctx.render('demo');
});

pageRouter.get('/page', async (ctx, next) => {
    const params = {
        titel: 'Page Demo',
        content: 'Hello Koa!',
    };

    await ctx.render('page', {
        params,
    });
});


module.exports = pageRouter;

