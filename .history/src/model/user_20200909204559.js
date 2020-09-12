const database = require('../config/databases')
const user = {}

user.Get = () => {
    
    
    database.query(`SELECT * FROM user`)
    
}

module.exports = user