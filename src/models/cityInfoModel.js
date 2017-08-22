/**
 * 城市查询Model, 调用线上数据库
 * Created by Eragon on 2018-08-22
 */
const thunkify = require('thunkify');
const util = require('../common/utils');

const getCityInfo = function* () {
    const pool = util.creatMysqlPool();
    const conn = yield thunkify(pool.getConnection).call(pool);
    const querySQL = 'SELECT * FROM `test_model_success` WHERE 1';
    const result = (yield thunkify(conn.query).call(conn, querySQL))[0];
    conn.release();

    return result;
};

module.exports = {
    getCityInfo,
};
