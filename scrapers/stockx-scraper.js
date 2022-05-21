const axios = require('axios')
//const Sneaker = require('../models/Sneaker');

module.exports = {

  //getPrices = async (shoe, callback) => {
  getPrices: async (callback) => {

      const url = 'https://stockx.com/api/products/nike-blazer-low-off-white-university-red\?includes\=market'
      //const url = 'https://stockx.com/api/products/' + shoe.urlKey + '?includes=market'
      const config = {
        headers:{
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15'
        }
      };

      try {
        const response = await axios.get(url, config);
        // console.log(response)
        callback(response['data'])

      } catch (err) {
        console.log(err);
        callback(null)
      }


      //let priceMap = {}
      //try {
      //    const response = await axios.get('https://stockx.com/api/products/' + shoe.urlKey + '?includes=market', {
      //        headers: {
      //            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15'
      //        },
      //        http2: true
      //    });
      //    let json = JSON.parse(response.body);
      //    callback();

      //} catch (error) {
      //    let err = new Error("Could not connect to StockX while searching '", shoe.styleID, "' Error: ", error)
      //    console.log(err);
      //    callback(err)
      //}
  }
}

