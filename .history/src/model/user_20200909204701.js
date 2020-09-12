const database = require('../config/databases')
const user = {}

user.Get = () => {
    return New Promise((resolve, reject) => {
        database.query(`SELECT * FROM user`)
    })
    

    
}

module.exports = user