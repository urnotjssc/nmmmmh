const res = require("express/lib/response")

class UsersController{
    //Get users:
    index(req, res){
        res.render('users')
    }
    //detailed user:
    show(req, res){
        res.render('users')
    }
}
module.exports = new UsersController