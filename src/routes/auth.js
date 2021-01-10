const express = require("express")
const controller = require('../controller/auth')
const routes = express.Router()


routes.post('/auth', controller.login) 
    

module.exports = routes