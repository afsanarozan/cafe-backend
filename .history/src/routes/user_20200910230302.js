const express = require("express")
const controller = require('../controller/user')
const routes = express.Router()

const validate = require('../middleware/validate')

routes.get('/', controller.getAll)
routes.get('/', controller.getByUser)
routes.post('/', controller.Add)
routes.put('/',controller.Edit)
routes.delete('/',controller.Delete)

module.exports = routes
