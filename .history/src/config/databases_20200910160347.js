const Pool = require('pg-pool')

const db = new Pool({
    user : process.env.DB_USER,
    database : procce,
    password : "hahaha321",
    host : "localhost"
})

module.exports = db