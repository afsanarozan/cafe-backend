const model = require("../model/user")
const respon = require("../helper/respon")
const bcr = require("bcrypt")
const jwt = require('jsonwebtoken')
const Auth = {}
    
    Auth.login = async(req, res) => {
    try {
        const passDB = await model.getByUser(req.body.name)
        
        if (passDB <= 0 ){
            return respon(res, 200, "Username tidak Ada")
        }

        const passReq  = req.body.password
        const check = await bcr.compare(passReq, passDB[0].password)

        if(check) {
            // const result = await this.setToken(passDB[0].name)            
            // respon(res, 200, result)
            const payload = {
                name: passDB[0].name,
                hak: passDB[0].hak
            }

            const token =  jwt.sign(payload, process.env.JWT_KEYS, {expiresIn: 7200})
            const refreshToken =  jwt.sign(payload, process.env.JWT_KEYS, {expiresIn: 7200})
            
            const result = {
                token: token,
                refreshToken : refreshToken,
                msg: "Token created, login success",
            }
            respon(res, 200, result)
            console.log(payload)
        } else {
            respon(res, 200, "gagal Login")
        }

    } catch (error) {
        respon(res, 500, error)
    }
    
}
    


module.exports = Auth
