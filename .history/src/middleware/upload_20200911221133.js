const multer = require('multer ')

const storage = multer.diskStorage({
    destination : 'public/upload'
})

const upload = multer({

})

module.exports = upload