const express = require("express")
const controller = require('../controller/user')
const routes = express.Router()

routes.get('/', controller.Get)
routes.pist('/', controller.Get)

module.exports = routes
