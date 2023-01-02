// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// Allow CORS (so folks can make AJAX request from any origin)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  
  var aphorisms = require("./aphorisms.json");
  var randomIndex = Math.floor(Math.random() * aphorisms.length);
  var randomAphorism = aphorisms[randomIndex];
  
  response.setHeader('Content-Type', 'application/json');
  response.json(randomAphorism);
});

app.get('/api/example', function(request, response) {
  var aphorisms = require("./aphorisms.json");
  var curieAphorisms =  [
    aphorisms[109],
    aphorisms[120],
    aphorisms[121]
  ];
  
  
  response.setHeader('Content-Type', 'application/json');
  response.json(curieAphorisms);
});

app.get('/api/random', function(request, response) {
  var aphorisms = require("./aphorisms.json");
  var randomIndex = Math.floor(Math.random() * aphorisms.length);
  var randomAphorism = aphorisms[randomIndex];
  
  response.setHeader('Content-Type', 'application/json');
  response.json(randomAphorism);
});

app.get('/api/all', function(request, response) {
  var aphorisms = require("./aphorisms.json");
  response.setHeader('Content-Type', 'application/json');
  response.json(aphorisms);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
