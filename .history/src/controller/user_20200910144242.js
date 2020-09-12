const model = require('../model/user')
const hashPassword = require('../helper/hash')
const respon = require('../helper/respon')
const user = {}

class U
user.Get = async (req, res) => {
    try {
        const result = await model.Get()
        return respon(res, 200 , result)
    } catch (error) {
        return res.status(500).json('Terjadi Error')
    }
}

user.getByUser = async(req, res) => {
    try {
        const result = await model.getByUser(req.query.name)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}


user.Add = async(req, res ) => {
    try {
        const passHash = await hashPassword(req.body.password)
        const data = {
            name : req.body.name,
            password : passHash,
        }
        const result = await model.Add(data)
        return respon (res, 200, data)
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

module.exports = new User()