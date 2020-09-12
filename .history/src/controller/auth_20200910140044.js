const model = require("../model/user")
const respon = require("../helper/respon")
const bcr = require("bcrypt")

class Auth {
     async login(req, res){
        try {
            const name = model.getByUser(req.body.name)

            const PassReq  = req.body.password
            const check = await bcr.compare(passReq, passDB[0].password)

            if(check) {
                respon(res, 200,"Berhasil Login")
            } else {
                respon(res, 200, "gagal Login")
            }

        } catch (error) {
            respon(res, 500, error)
        }
        
    }
}