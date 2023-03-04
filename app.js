const express = require('express');
const app = express();
const ua = require('universal-analytics');

// Set up Google Analytics.js
const visitor = ua('G-RY7JQ1HM4T');
app.use(function(req, res, next) {
  res.analytics = visitor;
  next();
});

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
