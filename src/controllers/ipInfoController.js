/**
 * IP信息查询控制器
 * Created by Eragon on 2018-08-21
 */
const thenRequest = require('then-request');
const syncRequset = require('sync-request');
const ENUM = require('../common/ENUM');

module.exports = {
    /**
     * getIpInfo 根据ip产生ip的信息对象
     * @param  {string} ip ip字符串
     * @return {object}    ip信息对象
    */
    * getIpInfo(ip) {
        const result = {
            success: false,
            msg: ENUM.RET_SUCCESS.msg,
            data: null,
        };

        const resData = thenRequest('GET', ENUM.IP_INFO_SERVER + ip);

        console.log(resData);
        /*
            resData.done(function (res) {
                console.log(res.getBody());
            });
        */

        result.data = resData;
        return result;
    },
};
