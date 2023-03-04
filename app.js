const express = require('express');
const app = express();
const ua = require('universal-analytics');
const path = require('path');


// Set up Google Analytics.js
const visitor = ua('G-RY7JQ1HM4T');
app.use(function(req, res, next) {
  res.analytics = visitor;
  next();
});

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(process.env.PORT || 3000, function() {
  console.log('Server started on port ' + (process.env.PORT || 3000));
});
