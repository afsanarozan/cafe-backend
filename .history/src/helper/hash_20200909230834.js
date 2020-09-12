const bcr = require('bcrypt')


hashPassword = (pass) => {
    try {
        const salt = bcr.genSalt(10)



    } catch (error) {
        throw error
    }

}

module.exports = hashPassword