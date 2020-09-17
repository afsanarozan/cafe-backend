const respon = require('../helper/respon')
const jwt = require("jsonwebtoken")
const jwtDecode = require('jwt-decode')
const auth = require('../controller/auth')
const refreshToken = require('refresh-token')


const checkToken = (req, res, next) => {
    const {token} = req.headers

    if (!token) {
        const result = {
            msg : "Login dulu"
        }
        return respon(res, 401, result)
    }
    const jwtToken = jwtDecode(token) 
    const userRole = jwtToken.hak
    console.log(jwtToken)

    jwt.verify(token, process.env.JWT_KEYS, (err, decode) => {
        if (err) {
            return respon(res, 401, err,decode)
            } 
        next()
    })
}

module.exports = checkToken