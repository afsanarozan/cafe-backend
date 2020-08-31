const model = require('../model/category')
const category = {}

    category.all = async (req, res) => {
        try {
            const data = await model.all()
            return res.status(200).json(data) 
        } catch (error) {
            return res.status(500).json('Terjadi Error')
        }
    }

    category.add = (req, res) => {
        const {food_category, supplier} = req.body
        const data = model.add(food_category, supplier)
        return res.send(data)
    }

    category.edit = (req, res) => {
        const {id, food_category, supplier} = req.body
        console.log(req.body)
        const data = model.Edit(id, food_category, supplier)
        return res.send(data)
    }
    
    category.delete = (req, res) => {
        const {id} = req.body
        const data = model.delete(id)
        return res.send(data)
    }

module.exports = category