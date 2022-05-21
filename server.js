require('dotenv').config({path: __dirname + `/.env.${process.env.NODE_ENV}`});
const express = require('express');
const app = express();
const fs = require('fs')
const stockXScraper = require('./scrapers/stockx-scraper.js')

//const mongoose = require('mongoose');
//require('./routes/sneaks.routes.js')(app);
//const SneaksAPI = require('./controllers/sneaks.controllers.js');

var HOST = process.env.HOST || '127.0.0.1';
var PORT = process.env.PORT || 8080;
//mongoose.Promise = global.Promise;

app.get('/', (req, res) => {
  res.end('Hello World!');
});

// id = nike-blazer-low-off-white-university-red
// based off the "urlKey" param in the stockx api response
app.get('/id/:id', (req, res) => {
  stockXScraper.getPrices(req.params.id, function (data) {
    res.json(data);
  })
});

app.listen(PORT, function () {
  console.log(`stonkb-api listening on port`, PORT);
 });

