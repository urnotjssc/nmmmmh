const express = require('express')
const morgan = require('morgan');
const path = require('path');
const { engine  } = require('express-handlebars');
//import { engine } from 'express-handlebars';
const app = express()
const port = 3000

//Handlebars
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname,'views'));

//HTTP logger
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})