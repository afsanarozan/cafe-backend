const model = require('../model/product')
const product = {}

product.All = async (req, res) => {
    try {
        const data = await model.GetAll()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
}

product.Add = (req, res) => {
    const {name, stock, price, date} = req.body
    const data = model.Add(name, stock, price, date)   
    return res.send(data)
    }

product.Edit = (req, res) => {
    const {id, name, stock, price, date} = req.body
    const data = model.Edit(id, name, stock, price, date)   
    return res.send(data)
}

product.Delete = (req, res) => {
    const {id} = req.body
    const data = model.Delete(id)   
    return res.send(data)
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