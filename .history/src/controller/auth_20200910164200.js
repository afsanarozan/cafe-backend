const model = require("../model/user")
const respon = require("../helper/respon")
const bcr = require("bcrypt")
const jwt = require('jsonwebtoken')

class Auth {
     async login(req, res){
        try {
            const passDB = await model.getByUser(req.body.name)
            const passReq  = req.body.password
            
            if (passDB <= 0 ){
                return respon(res, 200, "Username tidak Ada")
            }
            
            const check = await bcr.compare(passReq, passDB[0].password)

            if(check) {
                const result = await this.setToken(req.body.name)
                respon(res, 200, result)
            } else {
                respon(res, 200, "gagal Login")
            }

        } catch (error) {
            respon(res, 500, error)
        }
        
    }

    setToken = async (user)=> {
     try {
        const payload = {
            user : user
        }
   
        const token = jwt.sign(payload, process.env.JWT_KEYS, {expiresIn: '60'})
        const result = {
           token: token,
           msg: "Token created, login succsess",
       }
   
        return result   
     } catch (error) {
        throw error
    }
     
 }

}

module.exports = new Auth()