const model = require("../model/user")
const respon = require("../helper/respon")
const bcr = require

class Auth {
     Login = async(req, res){
        try {
            const name = model.getNyUser(req.body.name)

            if (passDB.length <= 0) {
                return respon(res, 200, "Name Tidak Terdaftar")
            }

            const PassReq  = req.body.password
            const check = await
        } catch (error) {
            
        }
        
    }
}