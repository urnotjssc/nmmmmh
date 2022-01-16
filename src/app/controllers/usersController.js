const { MongoosetoObject } = require('../../ulti/mongoose')
const User = require('../models/User')

class UsersController{
    //Get user: /users/username
    show_user(req, res, next) {
        User.findOne({username: req.params.username})
            .then(
                user => res.render('users',{ user:MongoosetoObject(user)})
            )
            .catch(next)
    }
}

module.exports = new UsersController