# Stonkb-api
Stockx api scraper to be used with a few future projects. 




## Using the stockx api
curl -a  https://stockx.com/api/products/nike-blazer-low-off-white-university-red\?includes\=market





## Development

### NPM
`server.js` is the main entry point
```
"scripts": {
    "dev": "NODE_ENV=dev node server.js",
    "start": "NODE_ENV=prod node server.js"
  },
```


### .env files
`NODE_ENV` is set in package.json, can also just be exported.

The `NODE_ENV` corresponds to the suffix of a corresponding `.env` file.

Sample:

.env.dev:
```
HOST=127.0.0.1
PORT=8080
```

.env.prod:
```
HOST=127.0.0.1
PORT=80
```






## Credit
Based loosly off of [druv5319](https://github.com/druv5319/Sneaks-API)
