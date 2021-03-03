/**
 * @fileOverview 简单示例
 * @name simple.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const { inject } = require('brick-engine');
const { redis } = require('../../../../..');

class Simple {
}


module.exports = Simple;

inject(Simple, { name: 'simple' });
redis(Simple);
