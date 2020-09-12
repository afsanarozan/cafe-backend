const Pool = require('pg-pool')

const db = new Pool({
    user : process.env.DB_USER,
    database : process.env.DB_DATABASE,
    password :\,
    host : "localhost"
})

module.exports = db