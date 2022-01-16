const usersRouter = require('./users')
const homeRouter = require('./home')
const registerRouter = require('./register')
function route(app){

    app.use('/users', usersRouter)
    app.use('/home', homeRouter)
    app.use('/register', registerRouter)
};

module.exports = route