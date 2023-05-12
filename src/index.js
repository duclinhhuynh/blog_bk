const path = require('path')
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const port = 3000


const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

// XMLHttpRequest , fetch, axios,

app.use(morgan('combined'))
//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}))
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/views'));
// console.log(path.join(__dirname, 'resources/views'))
// route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})