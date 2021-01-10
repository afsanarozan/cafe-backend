const model = require('../model/history')
const history = {}

history.all = async (req, res) => {
    try {
        const data = await model.GetAll()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
}

history.add = async (req, res) => {
    try {
        const {cashier, date, orders, amount} = req.body
        console.log(req.body)
        const data = model.Add(cashier, date, orders,amount)
        return res.send("Data Ditambahkan")
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
}

history.Edit = async (req, res) => {
    try {
    const {invoice, cashier, date, orders, amount} = req.body
    const data = model.Edit(invoice, cashier, date, orders, amount)
        return res.send("Data Diedit")
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
}


history.delete= async (req, res) => {
    try {
        const {invoice} = req.body
        const data = model.Delete(invoice)
        return res.send("Data telah Dihapus")
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
}

module.exports = history