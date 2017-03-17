const express = require ('express');
const app = express()
const bodyParser = require ('body-parser')
const nunjucks = require ('nunjucks')
const volleyball = require ('volleyball')
const path = require('path')
const models = require('./models/models.js')
const router = require('./routes/routes.js')

app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests
app.use(volleyball)

const env = nunjucks.configure('views', {noCache: true});

app.use(express.static('./public'))
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'))
app.use('/jquery', express.static('./node_modules/jquery/dist'))
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/', router)


models.db.sync()
  .then(function(){
    app.listen(3000, function(){
      console.log('listening on port 3000')
    })
  })
  .catch(console.error)
