/**
 * IP信息查询控制器
 * Created by Eragon on 2018-08-21
 */
const ipInfoModel = require('../models/ipInfoModel');
const cityInfoModel = require('../models/cityInfoModel');

const getUserinfo = function(ip){
    /*ip = "211.161.244.241";*/
    const res1 =  ipInfoModel.getIpInfo(ip);
    const res2 =  cityInfoModel.getCityInfo();

    return res2;
};


module.exports = {
    getUserinfo
};
