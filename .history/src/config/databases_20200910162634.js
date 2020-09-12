const Pool = require('pg-pool')

const db = new Pool({
    user : process.env.DB_USER,
    database : process.env.DB_DATABAASE,
    password : "hahaha321",
    host : "localhost"
})

module.exports = db