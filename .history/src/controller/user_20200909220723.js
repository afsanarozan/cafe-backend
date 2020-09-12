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
        return res.status(200).json(data)
    } catch (error) {
        return res.status(200).json('Gagal Menambahkan')
    }
}


user.Edit = async (req, res ) => {
    try {
        const {id, name,password,token} = req.body
        console.log(req.body)
        const data = await model.Edit(id,name,password,token)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(200).json('Gagal Menambahkan')
    }
}

module.exports = user