const model = require('../model/user')
const user = {}

user.Get = async (req, res) => {
    try {
        const data = await model.Get()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json('Terjadi Error')
    }
}


user.Add = async (req, res ) => {
    try {
        const {name,password,token} = req.body
        console.log(req.body)
        const data = await model.Add(name,password,token)
        return 
    } catch (error) {
        
    }
}

module.exports = user