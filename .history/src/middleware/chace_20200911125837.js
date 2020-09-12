const respon = require('../helper/respon')\
const redis = require('../config/redis')

const getAll = (req,res, next) => {
    redis.redisdb.get("product", (err, res) => {

        if(err) {
            RESPON respon, 500)
        }
    }
    )
}