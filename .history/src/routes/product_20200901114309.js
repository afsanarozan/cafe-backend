const express = require("express")
const controller = require('../controller/product')
const routes = express.Router()

routes.get("/", controller.All)
routes.post("/", controller.Add)
routes.put("/",controller.Edit)
routes.delete("/",controller.Delete)
routes.get("/search", controller.search)
routes.get("/lastupdate", controller.lastupdate)
routes.get("/name",controller.name)
routes.get("/category",controller.category)
routes.get("/price",controller.price)


module.exports = routes