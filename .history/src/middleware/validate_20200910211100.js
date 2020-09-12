const respon = require('../helper/respon')
const jwt = require("jsonwebtoken")
const jwtDecode = require('j')


const checkToken = (req, res, next) => {
    const {token} = req.headers

    if (!token) {
        const result = {
            msg : "Login dulu"
        }
        return response (res, 401, result)
    }
}