const express = require('express');
const sitemap = require('sitemap');
const helmet = require('helmet');
const prerender = require('prerender-node');
const ua = require('universal-analytics');

const app = express();

// Set up sitemap
app.use(sitemap({
  sitemap: 'sitemap.xml',
  map: {
    '/': ['get'],
  },
}));

// Set up SEO metadata middleware
app.use(function(req, res, next) {
  res.locals.seo = {
    title: 'Free Premium OnlyFans Leaks',
    description: 'Get access to free premium OnlyFans content. Join our Telegram and Discord groups to get access to leaked content.',
    keywords: 'OnlyFans, leaks, premium content, free, Telegram, Discord, content, exclusive content, adult content, NSFW, sexy, erotic',
    canonical: 'https://example.com/'
  };
  next();
});

// Set up Helmet.js
app.use(helmet());

// Set up Prerender.js
app.use(prerender());

// Set up Google Analytics.js
const visitor = ua('UA-XXXXX-X');
app.use(function(req, res, next) {
  res.analytics = visitor;
  next();
});

// Set up routes
app.get('/', (req, res) => {
  res.send('Homepage');
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
