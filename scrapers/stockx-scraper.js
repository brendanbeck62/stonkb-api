const axios = require('axios')
//const Sneaker = require('../models/Sneaker');

const USER_AGENT_HEADER =  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15'

module.exports = {

  getProduct: async (id, callback) => {

    // nike-blazer-low-off-white-university-red
    const url = 'https://stockx.com/api/products/' + id + '?includes=market'
    const config = {
      headers:{
        'User-Agent': USER_AGENT_HEADER
      }
    };

    try {
      const response = await axios.get(url, config);
      callback(response['data']);

    } catch (err) {
      console.log(err);
      callback(null);
    }
  },

  searchProduct: async (query, callback) => {
    url = `https://www.stockx.com/api/browse?_search=${query}`
    const config = {
      headers:{
        'User-Agent': USER_AGENT_HEADER
      }
    };
    try {
      const response = await axios.get(url, config);
      callback(response['data']);

    } catch (err) {
      console.log(err);
      callback(null);
    }

  }

}

