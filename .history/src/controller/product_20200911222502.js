const model = require('../model/product')
const respon = require('../helper/respon')
const redis = require('../config/redis')
const product = {}

product.All = async (req, res) => {
    try {
        const data = await model.GetAll()
        const data_redis = JSON.stringify(data)
        redis.redisdb.setex("product", 30, data_redis)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
}

product.lastupdate = async(req, res) => {
    try {
        const data = await model.Lupdate()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
}

product.name = async(req, res) => {
    try {
        const data = await model.Name()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
}

product.category = async(req, res) => {
    try {
        const data = await model.Category()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
}

product.price = async(req, res) => {
    try {
        const data = await model.Price()
        return res.send('Data Ditambahkan')
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
}

product.Add = async(req, res) => {
    try {
        if(req.fle === undefined){
            console.log(req.file)
            return res.status(500).js on("Data Kosong")
        }
        const {name,  price, date, images} = req.body
        console.log(req.body)   
        const datas = {
            name: req.body.name
            
        }
        const data = await model.Add(name, price, date,  images)
        return res.send('Data Ditambaahkan')
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
} 


product.Edit= async (req, res) => {
    try {
        const {id, name, images, price, date} = req.body
        console.log(req.body)
        const data = model.Edit(id, name, images, price, date)  
        return res.status(200).json("Berhasil Diedit")
    } catch {
        return res.status(500).json("terjadi Error")
    }
} 

product.Delete= async (req, res) => {
    try {
        const {id} = req.body
        const data = model.Delete(id)   
        return res.status(200).json("Berhasil Dihapus")
    } catch {
        return res.status(500).json("terjadi Error")
    }
}

product.search = async (req, res) => {
    try {
        const name = req.query.name
        const data = await model.Get(name)
        if(data == ''){
        return res.status(200).json('Data Tidak Ada')
    } else {
        return res.status(200).json(data)
    }
    } catch (error) {
        return res.status(500).json("Error")
        
    }
}




module.exports = product