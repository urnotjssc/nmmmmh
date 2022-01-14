const express = require('express')
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const route = require('./routes')
//import { engine } from 'express-handlebars';
const app = express();
const port = 3000;
//Static file
app.use(express.static(path.join(__dirname,'public')));
//
app.use(express.urlencoded());
app.use(express.json());

//Handlebars
app.engine('hbs', engine({ 
    extname :'.hbs'
    }));
app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname,'resourses','views'));

//HTTP logger
app.use(morgan('combined'))
//
route(app);
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/search', (req,res) => {
  res.render('search')
});
app.post('/search', (req,res) => {
  //console.log(req.body)
  res.send('')
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});