/**
 * 脚手架文件，各种公用方法集合
 * Created by Eragon on 2017-08-18
 */
const mysql = require('mysql');
const config = require('../../config/');

module.exports = {
    /**
     * getDomain 链接数据库
     * @return {string}    pool;
    */
    creatMysqlPool() {
        return mysql.createPool(config.mysqlConfig);
    },

    /**
     * getDomain 根据pageUrl获取domain
     * @param  {string}    url
     * @return {string}    domain
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

