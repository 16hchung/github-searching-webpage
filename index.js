// Heejung Chung, Stanford undergrad class of 2021
// application for searching github users and displaying their basic info
// Resources used:
//	- followed the following tutorial to set up heroku:
//		https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction


// Boilerplate from tutorial...
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/scripts'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// using files that I modified/implemented...
app.get('/', function(request, response) {
  response.render('pages/index');
});