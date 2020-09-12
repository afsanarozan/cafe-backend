const express = require("express")
const controller = require('../controller/user')
const routes = express.Router()

routes.get('/', controller.GetAll)
routes.get('/', controller.getByUser)
routes.post('/', controller.Add)
routes.put('/',controller.Edit)
routes.delete('/',controller.Delete)

module.exports = routes
