const respon = require('../helper/respon')\
const redis = require('../config/redis')

const getAll = (req,res, next) => {
    redis.redisdb.get("product", (err, res) => {

        if(err) {
            respon (res, 500, err)
        } 
        if (res !== null) {
            
        }
    }
    )
}