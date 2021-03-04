/**
 * redis连接注入可选项
 */
export type redisOpts = {
    /**
     * 使用redis连接的名称
     */
    name: string | Symbol;
    /**
     * 注入对象的属性
     */
    property: string | Symbol;
};
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
 * @returns {Any} 目标对象
 */
export function redis(target: any, opts: redisOpts): any;
export function redisGen(dsn: any): {
    db: number;
    host?: undefined;
    port?: undefined;
    username?: undefined;
    password?: undefined;
} | {
    db: number;
    host: string;
    port: string;
    username: string;
    password: string;
};
export function getEnv(env: any, defaultVal: any): any;
