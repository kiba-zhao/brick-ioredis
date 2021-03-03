/**
 * @fileOverview 应用入口
 * @name app.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const Redis = require('ioredis');
const { inject, ENGINE } = require('brick-engine');
const { IOREDIS } = require('./lib/constants');

module.exports = engine => {
  engine.install(factory);
};

function factory(engine) {

  const config = engine.config.redis;
  const keys = Reflect.ownKeys(config || {});
  const clients = { [IOREDIS]: Redis };
  if (keys.length > 0) {
    for (const key of keys) {
      const { startupNodes, ...opts } = config[key];
      if (startupNodes) {
        clients[key] = new Redis.Cluster(startupNodes, opts);
      } else {
        clients[key] = new Redis(opts);
      }
    }
  }
  return clients;
}

inject(factory, { name: IOREDIS, deps: [ENGINE] });
