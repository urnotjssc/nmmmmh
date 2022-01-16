const { MultiMongoosetoObject } = require('../../ulti/mongoose')
const User = require('../models/User')

class HomeController{
    //Get users: /home
    index(req, res, next) {
        User.find ({})
        .then(users => { res.render('home',{users: MultiMongoosetoObject(users)} )})
        .catch(next)
    }
    
}

module.exports = new HomeController