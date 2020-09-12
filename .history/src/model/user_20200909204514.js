const database = require('../config/databases')
const user = {}

user.Get = () => {
    database.query()
}

module.exports = user