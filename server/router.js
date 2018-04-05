const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').load();

//Route to fetch prices from Cache and/or live CoinAPI.io
router.get('/prices', (req, res)=>{
  
  const cryptoId = req.query.crypto || 'BTC';
  const currencyId = req.query.currency || 'USD';
  const date = req.query.date || Date.now();

  const config = {
    url: `https://rest.coinapi.io/v1/exchangerate/${cryptoId}/${currencyId}`,
    method: 'get',
    headers: {
      'X-CoinAPI-Key': process.env.API_KEY
    },
    params:{
      time: date
    }
  }

  axios(config)
  .then((response)=>res.send(response.data));

})


module.exports = router;