const express = require('express')
const router = express.Router()

const usersController = require('../app/controllers/usersController')

router.get('/:id', usersController.show)
router.get('/', usersController.index)


module.exports = router;
