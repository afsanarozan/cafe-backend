const express = require("express")
const product = require('./routes/product')
const history = require('./routes/history')
const category = require('./routes/category')
const user - requi
const routes = express.Router()

routes.use("/product", product)
routes.use("/history", history)
routes.use("/category", category)

module.exports = routes