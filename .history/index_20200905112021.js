const express = require('express')
const server = express()
const routes =  require('./src/main')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const databases = require('./src/config/databases')
const port = 2000
const cors = require()

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(morgan('dev'))
server.use(routes)

databases.connect()
.then((result) => {
    console.log("Database Connected")
}).catch((err) => {
    console.log("database not Coneceted")   
});

server.listen(port, () => {
    console.log(`You Are Running on port ${port}`)
})

 