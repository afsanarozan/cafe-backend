const redis = require('redis')

class redis {
        constructor () {
            this.redisdb = redis.createClient({
            host : process.env.REDIS_HOST,
            port : process.env.REDIS_PORT,
        })
    }

    redisCheck () {
        return new Promise((resolve, reject) => {
            this.redisdb.get("product", (err, ress) => {

                if (err) {
                    reject("Redis Not Connect")
                }
                if(res == 'nil'){
                    resolve("")
                }
            })
        })
    }

}