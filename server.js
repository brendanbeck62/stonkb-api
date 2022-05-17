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

app.get('/test', (req, res) => {
  data = stockXScraper.getPrices()
  res.send(data)
  //stockXScraper.getPrices(shoe, function () {
  //  cbCounter++;
  //  if (cbCounter == 5) {
  //    callback(null, shoe)
  //  }
  //});
});

//app.get("/list_movies", (req, res) => {
//    fs.readFile(__dirname + '/' + 'movies.json', 'utf8', (err, data) => {
//        res.end(data);
//    });
//});

app.listen(PORT, function () {
  console.log(`stonkb-api listening on port`, PORT);
 });


//module.exports = app;
//module.exports = SneaksAPI;
