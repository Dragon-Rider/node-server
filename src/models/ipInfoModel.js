/**
 * IP信息查询Model, 调用淘宝Service
 * Created by Eragon on 2018-08-22
 */
const request = require('request-promise');
const ENUM = require('../common/ENUM');

/**
 * getIpInfo 根据ip产生ip的信息对象
 * @param  {string} ip ip字符串
 * @return {object}    ip信息对象
 */
const getIpInfo = function* (ip) {
    const options = {
        url: ENUM.IP_INFO_SERVER,
        method: 'GET',
        qs: {
            ip,
        },
        json: true,
    };
    const res = yield request(options);

    return res.data;
};

module.exports = {
    getIpInfo,
};
