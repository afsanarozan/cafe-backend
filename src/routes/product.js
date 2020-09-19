const express = require("express") 
const controller = require('../controller/product')
const upload = require('../middleware/upload')
const validate = require('../middleware/validate-using')
const chace = require('../middleware/chace')
const routes = express.Router()

routes.get("/", controller.All)
routes.post("/", upload.single("image"),controller.Add)
routes.put("/", upload.single("image"),controller.Edit)
routes.get('/:id', controller.show)
routes.delete("/:id",controller.Delete)
routes.get("/search", controller.search)
routes.get("/lastupdate", controller.lastupdate)
routes.get("/:id/name",controller.name)
routes.get("/price", controller.price)


module.exports = routes