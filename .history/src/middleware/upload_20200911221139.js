const multer = require('multer ')

const storage = multer.diskStorage({
    destination : 'public/upload'
    filename
})

const upload = multer({

})

module.exports = upload