const Pool = require('pg-pool')

const db = new Pool({
    user : "postgres",
    database : "mydb",
    password : "hahaha321",
    host : "localhost"
})

module.exports = db