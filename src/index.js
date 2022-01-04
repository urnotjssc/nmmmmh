const express = require('express')
const morgan = require('morgan');
const path = require('path');
const { engine  } = require('express-handlebars');
//import { engine } from 'express-handlebars';
const app = express()
const port = 3000

//Handlebars
app.engine('hbs', engine({ 
    extname :'.hbs'
    }));
app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname,'views'));

//HTTP logger
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})