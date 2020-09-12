const express = require('express')
const server = express()
const routes =  require('./src/main')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const databases = require('./src/config/databases')
const port = 2000
const cors = require('cors')
const redis = require('./src/config/redis')
const refreshTtoken = require("./")

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(morgan('dev'))
server.use(routes)
server.use(cors())
server.use("/public", express.static("public"))

databases.connect() 
.then((result) => {
    console.log("Database Connected")
}).catch((err) => {
    console.log("database not Coneceted")   
});

server.listen(port, () => {
    console.log(`You Are Running on port ${port}`)
})

redis.redisCheck()
.then(res => {
    console.log(res)
})
.catch(res => {
    console.log(res)
})

server.get('/products/:id', cors(), function (req, res, next) {
    res.json( {msg: 'This is CORS-enabled for a Single Route'})
  })

 