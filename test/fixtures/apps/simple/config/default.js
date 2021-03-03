/**
 * @fileOverview 默认配置
 * @name default.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const { ENGINE } = require('brick-engine');

exports[ENGINE] = {
  modules: { modules: { patterns: 'modules/**/*.js' } },
};
