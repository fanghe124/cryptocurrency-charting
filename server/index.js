const express = require('express');
const app = express();
const router = require('./router.js')

app.use(express.static('./client/public'));

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log(`Listening on PORT ${PORT}!`));



