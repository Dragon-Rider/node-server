'use strict'

const isProdEnv = process.env.NODE_ENV && 'production'=== process.env.NODE_ENV ;

let config = {};

if (isProdEnv) {
    config = require('./prod.env.config');
} else {
    config =require('./dev.env.config');
}

module.exports = config;
