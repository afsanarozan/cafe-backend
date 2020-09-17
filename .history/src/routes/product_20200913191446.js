const express = require("express") 
const controller = require('../controller/product')
const upload = require('../middleware/upload')
const validate = require('../middleware/validate-using')
const chace = require('../middleware/chace')
const routes = express.Router()

routes.get("/", validat,controller.All)
routes.post("/", upload.single("image"),controller.Add)
routes.put("/", controller.Edit)
routes.delete("/",controller.Delete)
routes.get("/search", controller.search)
routes.get("/lastupdate", controller.lastupdate)
routes.get("/name",controller.name)
routes.get("/category",controller.category)
routes.get("/price",controller.price)


module.exports = routes