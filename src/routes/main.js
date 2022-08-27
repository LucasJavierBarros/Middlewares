const router = require ('express').Router()
const {index,about,contact,services,admin,login} = require('../controllers/mainController')

const adminCheck = require('../middlewares/adminCheck')

router
    .get('/',index)
    .get('/contact',contact)
    .get('/about',about)
    .get('/services',services)
    .get('/admin',adminCheck,admin)
    .get('/login',login)
module.exports = router;