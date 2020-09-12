const express = require("express")
const product = require('./routes/product')
const history = require('./routes/history')
const category = require('./routes/category')
const user = require('./routes/user')
const auth =
const routes = express.Router() require

routes.use("/product", product)
routes.use("/history", history)
routes.use("/category", category)
routes.use("/user", user)

module.exports = routes