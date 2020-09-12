const multer = require('multer ')

const storage = multer.diskStorage({
    destination : 'public/'
})

const upload = multer({

})

module.exports = upload