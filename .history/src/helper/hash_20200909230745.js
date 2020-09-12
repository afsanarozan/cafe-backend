const bcr = require('bcrypt')


hashPassword = (pass) => {
    try {
        const salt = bcr.genSalt()
        


    } catch (error) {
        throw error
    }

}

module.exports = hashPassword