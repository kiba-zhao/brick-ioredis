/**
 * @fileOverview 工具类代码
 * @name utils.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const assert = require('assert');
const { IOREDIS } = require('./constants');
const { assign, isString, isSymbol } = require('lodash');
const { provide } = require('brick-engine');

/**
 * redis连接注入可选项
 * @typedef {Object} redisOpts
 * @property {String | Symbol} name 使用redis连接的名称
 * @property {String | Symbol} property 注入对象的属性
 */

/**
 * redis连接注入声明函数
 * @param {Any} target 目标对象
 * @param {redisOpts} opts 可选项
 * @return {Any} 目标对象
 */
function redis(target, opts) {
  const { property, name } = assign({ property: 'redis', name: 'default' }, opts);
  assert(target !== undefined || target !== null, '[brick-ioredis] redis Error: wrong target');
  assert(name === undefined || isString(name) || isSymbol(property), '[brick-ioredis] redis Error: wrong logger name');
  assert(isString(property) || isSymbol(property), '[brick-ioredis] redis Error: wrong property');

  return provide(target, { property, dep: { id: IOREDIS, required: true, transform: clients => clients[name] } });
}

exports.redis = redis;

function dsnGen(dsn) {
  if (!dsn) { return {}; }
  const {
    hostname, port, username
    , password, pathname,
  } = new URL(dsn);
  return { host: hostname, port, username, password, database: pathname.substr(1) };
}

function redisGen(dsn) {
  const { database, ...opts } = dsnGen(dsn);
  return { ...opts, db: parseInt(database) };
}

exports.redisGen = redisGen;

function getEnv(env, defaultVal) {
  return env && env.length > 0 ? env : defaultVal;
}
exports.getEnv = getEnv;
