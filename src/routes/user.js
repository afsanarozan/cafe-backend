const express = require("express")
const controller = require('../controller/user')
const routes = express.Router()
const validate = require('../middleware/validate')

const chace = require('../middleware/chace')
 
routes.get('/', chace,controller.getAll)
routes.get('/', controller.getByUser)
routes.post('/', chace, controller.Add)
routes.put('/', controller.Edit)
routes.delete('/', controller.Delete)

module.exports = routes
