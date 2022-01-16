const express = require('express')
const router = express.Router()

const usersController = require('../app/controllers/usersController')
//abc.com/users/username
router.get('/:username', usersController.show_user)

module.exports = router;
