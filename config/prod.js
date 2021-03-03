/**
 * @fileOverview 生产配置
 * @name prod.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';
const { redisGen, getEnv } = require('../lib/utils');

const SEMICOLON = ';';

module.exports = env => {

  const exports = {};

  const REDIS_DSN = getEnv(env.REDIS_DSN);
  const REDIS_CLUSTER = getEnv(env.REDIS_CLUSTER);
  if (REDIS_CLUSTER) {
    exports.redis = {
      default: {
        startupNodes: REDIS_CLUSTER ? REDIS_CLUSTER.split(SEMICOLON).map(redisGen) : redisGen(REDIS_DSN),
        scaleReads: getEnv(env.REDIS_SCALEREADS, 'slave'),
      },
    };
  } else if (REDIS_DSN) {
    exports.redis = {
      default: redisGen(REDIS_DSN),
    };
  }

  return exports;
};
