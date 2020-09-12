const redis = require('redis')

class redis {
    constructor () {
        host : process.env.REDIS_HOST,
        port : process.env.REDIS_PORT,
    }
}