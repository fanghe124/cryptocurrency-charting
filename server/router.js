const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').load();

//Route to fetch prices from Cache and/or live CoinAPI.io
router.get('/prices', (req, res)=>{
  
  const cryptoId = req.query.crypto || 'ETH';
  const currencyId = req.query.currency || 'USD';
  const exchange = req.query.exchange || 'COINBASE';
  const config = {
    url: `https://rest.coinapi.io/v1/ohlcv/${exchange}_SPOT_${cryptoId}_${currencyId}/latest`,
    method: 'get',
    headers: {
      'X-CoinAPI-Key': process.env.API_KEY
    },
    params:{
      period_id: '1MTH'
    }
  }

  axios(config)
  .then((response)=>{
    console.log('Remaining Number of Requests', response.headers['x-ratelimit-remaining']);
    res.send(response.data)
  })
  .catch((error)=>res.send(error.data));

})


module.exports = router;

