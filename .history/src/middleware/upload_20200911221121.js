const multer = require('multer ')

const storage = multer.diskStorage({
    destination : 'pub'
})

const upload = multer({

})

module.exports = upload