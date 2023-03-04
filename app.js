const express = require('express');
const app = express();
const ua = require('universal-analytics');
const helmet = require('helmet');
const { Helmet } = require('react-helmet');

// Set up Google Analytics.js
const visitor = ua('G-RY7JQ1HM4T');
app.use(function(req, res, next) {
  res.analytics = visitor;
  next();
});

// Set up Helmet.js
app.use(helmet());

app.use(express.static('public'));

app.get('/', function(req, res) {
  // Set SEO metadata using react-helmet
  const helmet = Helmet.renderStatic();
  const seo = {
    title: 'Free Premium OnlyFans Leaks',
    description: 'Get access to free premium OnlyFans content. Join our Telegram and Discord groups to get access to leaked content.',
    keywords: 'OnlyFans, leaks, premium content, free, Telegram, Discord, content, exclusive content, adult content, NSFW, sexy, erotic'
  };
  res.render('index', { helmet, seo });
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
