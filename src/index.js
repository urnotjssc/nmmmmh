const express = require('express')
const morgan = require('morgan');
const handlebars = require('express-handlebars');
//import { engine } from 'express-handlebars';
const app = express()
const port = 3000

//Handlebars
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', '.src/views');

//HTTP logger
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})