export function redis(target: any, opts: any): void;
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
