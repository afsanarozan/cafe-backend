const Pool = require('pg-pool')

const db = new Pool({
    user : process.env.,
    database : "mydb",
    password : "hahaha321",
    host : "localhost"
})

module.exports = db