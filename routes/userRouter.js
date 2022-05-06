const router = require('express').Router()
const useCntrl = require('../controllers/userCntrl')

router.post('/register', useCntrl.register)



module.exports = router