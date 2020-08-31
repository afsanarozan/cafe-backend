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

history.add = (req, res) => {
    const {cashier, date, orders, amount} = req.body
    const data = model.Add(cashier, date, orders,amount)
    return res.send(data)
}

history.Edit = (req, res) => {
    const {invoice, cashier, date, orders, amount} = req.body
    console.log(req.body)
    const data = model.Edit(invoice, cashier, date, orders, amount)
    return res.send(data)
}

history.delete = (req, res) => {
    const {invoice} = req.body
    console.log(req.body)
    const data = model.Delete(invoice)
    return res.send(data)
}

module.exports = history