const database = require('../config/databases')
const user = {}

user.Get = () => {
    return New Promise 
    
    database.query(`SELECT * FROM user`)
    
}

module.exports = user