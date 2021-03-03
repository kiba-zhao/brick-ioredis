# brick-ioredis #
[brick-engine](https://github.com/kiba-zhao/brick-engine)的[ioredis](https://github.com/luin/ioredis#readme)插件模块.

## Install ##

``` shell
npm install brick-ioredis
```

## Configuration ##

**添加插件设置**

``` javascript
// {cwd}/plugin.js
// {cwd}/node_modules/{xxx engine}/plugin.js

exports.ioredis = {
    package:'brick-ioredis'
}
```

**在配置文件中定义参数**

``` javascript
// {cwd}/config/*.js
// {cwd}/node_modules/config/*.js

//简单配置
exports.redis = {
  default: { host: '127.0.0.1', port: 6379, db: 0 }
};

//cluster配置,详细请参考ioredis api文档
exports.redis = {
  default: { 
    startupNodes:[{host: '127.0.0.1', port: 6379}],
    ...
  }
};
```

## Usage ##
模型示例

``` javascript
const {redis} = require('brick-ioredis');

class Simple{
  async search(){
    await this.redis.set(...);
    const val = await this.redis.get(...);
  }
}

module.exports = Simple;

// 同等于 this.redis = clients.default;
redis(Simple);
// 同等于 this.redis1 = clients.client1;
logger(Simple,{name:'client1',property:'redis1'});

```

## Documentations ##
使用`jsdoc`生成注释文档

``` shell
git clone https://github.com/kiba-zhao/brick-ioredis.git
cd brick-ioredis
npm install
npm run docs
open docs/index.html
```
n
## License ##
[MIT](LICENSE)

