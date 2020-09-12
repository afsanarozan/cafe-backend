const bcr = require('bcrypt')


hashPassword = async(pass) => {
    try {
        const salt = await bcr.genSalt(10)
        console.log('salt :', salt)
        const result = await bcr.hash(password, salt)
        console.log('HashPassword :', )
        return result
    } catch (error) {
        throw error
    }

}

module.exports = hashPassword