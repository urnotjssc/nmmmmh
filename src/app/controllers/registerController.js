const { MongoosetoObject } = require('../../ulti/mongoose')
const User = require('../models/User')

class RegisterController{
    //[Get] user: /register
    register(req, res, next){
        res.render('register')
    }

    //[Post] /register/save
    save(req, res, next){ 
        res.json(req.body)
    }
}

module.exports = new RegisterController