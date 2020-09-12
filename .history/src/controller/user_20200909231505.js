const model = require('../model/user')
const hash = require('../helper/hash')
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
        const passHash = await hashPassword()

        
        const {name,password} = req.body
        console.log(req.body)
        const result = await model.Add(name,password,token)
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

user.Delete= async (req, res ) => {
    try {
        const {id} = req.body
        console.log(req.body)
        const data = await model.Delete(id)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(200).json('Gagal Menambahkan')
    }
}

module.exports = user