const axios = require('axios')
//const Sneaker = require('../models/Sneaker');

module.exports = {

  //getPrices = async (shoe, callback) => {
  getPrices: async (id, callback) => {

    // nike-blazer-low-off-white-university-red
    const url = 'https://stockx.com/api/products/' + id + '?includes=market'
    // const url = 'https://stockx.com/api/products/' + shoe.urlKey + '?includes=market'
    const config = {
      headers:{
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15'
      }
    };

    try {
      const response = await axios.get(url, config);
      callback(response['data'])

    } catch (err) {
      console.log(err);
      callback(null)
    }
  }
}

