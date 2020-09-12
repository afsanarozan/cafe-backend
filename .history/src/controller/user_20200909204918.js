const model = require('../model/user')
const user = {}

user.Get = async (req, res) => {
    try {
        const data = await model.Get()
        return res.status(200).JSON(data)
    } catch (error) {
        return res.status(500).JSON('Terjadi Error')
    }
}

module.exports