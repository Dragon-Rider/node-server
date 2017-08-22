/**
 * IP信息查询Model, 调用淘宝Service
 * Created by Eragon on 2018-08-22
 */
const mysql = require('mysql');
const thunkify = require('thunkify');
const ENUM = require('../common/ENUM');

module.exports = {

    * getCityInfo() {
        const pool = mysql.createPool({
            host     : '',
            user     : '',
            password : '',
            database : '',
            port: 3306
        });

        const conn = yield thunkify(pool.getConnection).call(pool);

        let querySQL = "SELECT * FROM `neitui100` WHERE 1";

        let result = (yield thunkify(conn.query).call(conn, querySQL))[0];

        conn.release();

        return result;
    },
};
