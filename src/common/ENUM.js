/**
 * 常用数据定义
 */

module.exports = {
    /* TABLE_PROJECT: config.mysql.tablePrefix + 'project', */

    // 返回的业务码
    RET_SUCCESS: {
        code: 200,
        msg: '接口调用成功',
    },
    RET_Error: {
        code: 401,
        msg: '用户输入错误',
    },
    RET_FORBIDDEN: {
        code: 403,
        msg: '没有权限访问',
    },

    // 获取ip信息的服务接口地址
    IP_INFO_SERVER: 'http://ip.taobao.com/service/getIpInfo.php?ip=',
};
