'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
//const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const pug = require('pug');
const app = express();
const port = process.env.PORT || 3100;
//fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','pug');
app.set('views','./public/views');

/*app.route('/')
  .get((req, res) => {
    res.sendFile(process.cwd() + '/views/index.pug');
  });
*/
app.route('/')
  .get((req, res) => {
    res.render('index');
  });

app.listen(port, () => {
  console.log("Listening on port " + port);
});
