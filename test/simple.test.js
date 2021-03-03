/**
 * @fileOverview 简单示例测试
 * @name simple.test.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const path = require('path');
const faker = require('faker');
const { IOREDIS } = require('..');
const { Engine, inject } = require('brick-engine');

const APP_PATH = path.join(__dirname, 'fixtures', 'apps', 'simple');

describe('simple.test.js', () => {

  let engine;

  beforeAll(() => {
    engine = new Engine({ chdir: APP_PATH });
  });

  afterAll(() => {
    engine = undefined;
  });

  it('success', async () => {
    const fn = jest.fn();
    inject(fn, { deps: [ IOREDIS, 'modules' ] });

    engine.init();
    engine.use(fn);

    expect(fn).toBeCalledTimes(1);
    const clients = fn.mock.calls[0][0];
    const modules = fn.mock.calls[0][1];

    expect(Object.keys(modules)).toEqual([ 'simple' ]);
    expect(modules.simple.redis).toEqual(clients.default);

    const redis = clients.default;
    redis.flushdb();
    const key = faker.random.word();
    const val = faker.random.word();
    await redis.set(key, val);
    const res = await redis.get(key);
    expect(res).toEqual(val);

    redis.disconnect();
  });

});
