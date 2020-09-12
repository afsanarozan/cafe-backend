const database = require('../config/databases')
const user = {}

user.Get = () => {
    database.query(`SELECT `)
}

module.exports = user