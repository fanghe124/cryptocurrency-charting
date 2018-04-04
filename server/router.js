const express = require('express');
const router = express.Router();
// const url = require('url');
// const url_parts = url.parse(request.url, true);
// const query = url_parts.query;

//Route to fetch prices from Cache and/or live CoinAPI.io
router.get('/prices', (req, res)=>{
  
  const crypto = req.query.crypto;
  const currency = req.query.currency;
  res.status(200).send(`${crypto} is crypto type and ${currency} is requested currency`)

})


module.exports = router;