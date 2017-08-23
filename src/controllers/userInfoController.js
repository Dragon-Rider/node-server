/**
 * IP信息查询控制器
 * Created by Eragon on 2018-08-21
 */
const ipInfoModel = require('../models/ipInfoModel');
const cityInfoModel = require('../models/cityInfoModel');

const getUserinfo = function (ip) {
    const result = {};
    result.ipInfo = ipInfoModel.getIpInfo(ip);
    //result.dbCityList = cityInfoModel.getCityInfo();

    return result;
};


module.exports = {
    getUserinfo,
};
