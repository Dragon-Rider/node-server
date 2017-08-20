/**
 * 脚手架文件，各种公用方法集合
 * Created by Eragon on 2017-08-18
 */
module.exports = {
    /**
     * getDomain 根据pageUrl获取domain
     * @param  {string} url url
     * @return {string}     domain
     */
    getDomain(url) {
        const urlWithoutProtocol = url.split('//')[1];
        const domainEndPos = urlWithoutProtocol.indexOf('/');

        if (domainEndPos === -1) {
            return urlWithoutProtocol;
        }

        return urlWithoutProtocol.substring(0, domainEndPos);
    },

    /**
     * isAjax 判定是否ajax请求
     * @param  {object}  ctx 对象
     * @return {Boolean}     是否是ajax请求
     */
    isAjax(ctx) {
        return ('xmlhttprequest' === ((ctx.get('X-Requested-With') || '').toLowerCase())) || (ctx.get('accept').indexOf('json') > -1); // eslint-disable-line
    },

    /**
     * getPageUrlWithoutParams 通过url获得不带参数的url
     * @param  {string} url 原url
     * @return {string}     去除参数的url
     */
    getPageUrlWithoutParams(url) {
        const queryPos = url.indexOf('?');
        const hashPos = url.indexOf('#');
        let pos = 0;

        if (queryPos === -1 && hashPos === -1) {
            return url;
        } else if (queryPos !== -1 && hashPos === -1) {
            pos = queryPos;
        } else {
            pos = Math.min(queryPos, hashPos);
        }

        return url.substring(0, pos);
    },
};

