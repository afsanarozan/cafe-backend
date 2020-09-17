const respon = require('../helper/respon')
const jwt = require("jsonwebtoken")
const jwtDecode = require('jwt-decode')
const auth = require('../controller/auth')


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
    console.log(userRole)

    jwt.verify(token, process.env.JWT_KEYS, (err, decode) => {
        if (err) {
            setToken = async (hak) => {
                try {
                const payload = {
                    hak : hak,
                }
            
                const token =  jwt.sign(payload, process.env.JWT_KEYS, {expiresIn: 60})
                
                const result = {
                    token: token,
                    msg: "Token created, login succsess",
                }
                console.log(token)
            
                return result    
                } catch (error) {
                    throw error
                    
            }
                
            }
            } 
        next()
    })
}

module.exports = checkToken