const multer = require('multer ')

const storage = multer.diskStorage({
    destination : 'public/upload'
    filename : (req , file, cb) => {
        cb(null, file.fieldname + new Date().t)
    } 
})

const upload = multer({

})

module.exports = upload