const express = require("express")
const controller = require('../controller/user')
const routes = express.Router()

routes.get('/', controller.Add)
routes.get('/', controller.P)
routes.get('/', controller.Add)
routes.get('/', controller.Add)
