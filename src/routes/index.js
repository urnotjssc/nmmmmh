const usersRouter = require('./users')

function route(app){

    app.use('/users', usersRouter)
};

    // app.get('/', (req, res) => {
    //     res.render('home');
    //   });
      
    //   app.get('/search', (req,res) => {
    //     res.render('search')
    //   });
    //   app.post('/search', (req,res) => {
    //     //console.log(req.body)
    //     res.send('')
    //   });

module.exports = route