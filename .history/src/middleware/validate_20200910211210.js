const respon = require('../helper/respon')
const jwt = require("jsonwebtoken")
const jwtDecode = require('jwt-decode')


const checkToken = (req, res, next) => {
    const {token} = req.headers

    if (!token) {
        const result = {
            msg : "Login dulu"
        }
        return response (res, 401, result)
    }

    jwt.verify(token, process.env.JWT_KEYS, (err, decode) => {
        id (err) {
            const result = {
                err : err,
                msg : "login Dulu"
            }
        }
    })
}