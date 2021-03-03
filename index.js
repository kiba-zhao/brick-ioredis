/**
 * @fileOverview 模块包入口
 * @name index.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const { IOREDIS } = require('./lib/constants');
const { redis } = require('./lib/utils');

exports.IOREDIS = IOREDIS;

exports.redis = redis;
