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
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Server started on port ${port}`);
});