const express = require('express')
const router = express.Router()
const registerController = require('../app/controllers/registerController')

//abc.com/resgister
router.get('/', registerController.register)
//abc.com/resgister/save
router.post('/save', registerController.save)

module.exports = router;
