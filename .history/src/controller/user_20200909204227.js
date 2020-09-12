const model = require('../model/user')
const user = {}

user.Get = async (req, res) => {
    try {
        const data = await model.Get()
        return res.s
    } catch (error) {
        
    }
}