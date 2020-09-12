const database = require('../config/databases')
const user = {}

user.Get = () => {
    database.query(`SELECT * FROM `)
}

module.exports = user