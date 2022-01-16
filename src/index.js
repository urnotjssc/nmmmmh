const express = require('express');
const morgan = require('morgan');
const path = require('path');
//
const Handlebars = require('handlebars')
const { engine } = require('express-handlebars');
//const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
//
const route = require('./routes');
const app = express();
const port = 3000;
//Database:
const db = require('./config/db');
db.connectDB();


//Static file
app.use(express.static(path.join(__dirname,'public')));
//
app.use(express.urlencoded());
app.use(express.json());

//Handlebars
app.engine('hbs', engine({ extname :'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname,'resourses','views'));

//HTTP logger
app.use(morgan('combined'))

//Route:
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});