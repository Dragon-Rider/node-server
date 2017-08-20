/**
 * IP信息查询控制器
 * Created by Eragon on 2018-08-21
 */
const thenRequest = require('then-request');
const syncRequset = require('sync-request');
const ENUM = require('../common/ENUM');

module.exports = {
    // 获取错误接口列表
    getApiErrorList: function*(projectId) {
        const result = {
            success: false,
            msg: ENUM.RET_SUCCESS.msg,
            data: null
        };

        try {
            const conn = yield thunkify(pool.getConnection).call(pool);

            const querySQL = 'select distinct substring_index(substring_index(error.errFilename, ?, 1), \'//\', -1) '
                + 'as apiName from ' + ENUM.TABLE_ENV + ' as env, ' + ENUM.TABLE_ERROR + ' as error '
                + 'where env.id=error.envKeyId and env.projectName=? and error.type=?';
            const params = ['?', projectId, 'API_ERR'];

            let resData = (yield thunkify(conn.query).call(conn, querySQL, params))[0];

            conn.release();

            result.success = true;
            result.msg = ENUM.RET_SUCCESS.msg;
            result.data = resData;
        }
        catch (e) {
            log.error('[%s] getApiErrorList exception. message: %s. stack:%s', fileName, e.message, e.stack);
        }

        return result;
    },

    /**
     * getIpInfo 根据ip产生ip的信息对象
     * @param  {string} ip ip字符串
     * @return {object}    ip信息对象
    */
    getIpInfo: function* (ip) {
        const result = {
            success: false,
            msg: ENUM.RET_SUCCESS.msg,
            data: null
        };

        let resData = syncRequset('GET', ENUM.IP_INFO_SERVER + ip);

        console.log(resData)
        /*
            resData.done(function (res) {
                console.log(res.getBody());
            });
        */

        result.data = resData;
        return result;
    },

};
