const respon = require('../helper/respon')
const jwt = require("jsonwebtoken")
const jwtDecode = require('jwt-decode')


const checkToken = (req, res, next) => {
    const {token} = req.headers

    if (!token) {
        const result = {
            msg : "Login dulu"
        }
        return respon(res, 401, result)
    }
    const jwtToken = jwtDecode(token) 
    const userRole = jwtToken.userRole
    console.log()
    jwt.verify(token, process.env.JWT_KEYS, (err, decode) => {
        if (err) {
            const result = {
                err : err,
                msg : "login Dulu"
            } 
            return response (res, 401, result)
        }
        next()
    })
}

module.exports = checkToken