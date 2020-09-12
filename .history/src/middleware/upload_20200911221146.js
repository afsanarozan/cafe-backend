const multer = require('multer ')

const storage = multer.diskStorage({
    destination : 'public/upload'
    filename : (req , file)
})

const upload = multer({

})

module.exports = upload