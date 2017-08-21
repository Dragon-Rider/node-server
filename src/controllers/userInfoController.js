/**
 * IP信息查询控制器
 * Created by Eragon on 2018-08-21
 */
const ipInfoModel = require('../models/ipInfoModel');

const getUserinfo = function(ip){
    /*ip = "211.161.244.241";*/
    const res =  ipInfoModel.getIpInfo(ip);
    return res;
};


module.exports = {
    'getUserinfo': getUserinfo
};
