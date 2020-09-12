const database = require('../config/databases')
const user = {}

user.Get = () => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT * FROM user`)
        .then(res => {
            resolve(res.rows)
        })
        .
    })
    

    
}

module.exports = user