const express = require("express")
const controller = require('../controller/product')
const routes = express.Router()

routes.get("/", controller.All)
routes.post("/", controller.Add)
routes.put("/",controller.Edit)
routes.delete("/",controller.Delete)
routes.get("/search", controller.search)
routes.get("/id", controller.urut)


module.exports = routes