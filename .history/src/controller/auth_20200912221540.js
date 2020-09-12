const model = require("../model/user")
const respon = require("../helper/respon")
const bcr = require("bcrypt")
const jwt = require('jsonwebtoken')

class Auth {
    login = async(req, res) => {
        try {
            const passDB = await model.getByUser(req.body.name)
           
            
            if (passDB <= 0 ){
                return respon(res, 200, "Username tidak Ada")
            }

            const passReq  = req.body.password
            const check = await bcr.compare(passReq, passDB[0].password)

            if(check) {
                const result = await this.setToken(passDB[0].hak)
                respon(res, 200, result)
            } else {
                respon(res, 200, "gagal Login")
            }

        } catch (error) {
            respon(res, 500, 'error')
        }
        
    }

    setToken = async (hak) => {
     try {
        const payload = {
            hak : hak,
        }
   
        const token =  jwt.sign(payload, process.env.JWT_KEYS, {expiresIn: 10})
        
        console.log(token)
        const result = {
           token: token,
           msg: "Token created, login succsess",
       }
   
        console.log(result)    
     } catch (error) {
        console.log(error)
    }
     
 }
 refreshToken = async (hak) => {
    try {
       const payload = {
           hak : hak,
       }
  
       const token =  jwt.sign(payload, process.env.JWT_KEYS, {expiresIn: 10})
       
       console.log(token)
       const result = {
          token: token,
          msg: "Token created, login succsess",
      }
  
       console.log(result)    
    } catch (error) {
       console.log(error)
   }
    
}

}

module.exports = new Auth()