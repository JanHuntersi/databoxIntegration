const express = require('express')
const app = express();

var db = require("./serverScripts/databox.js");
//const fun = tools.test();

app.listen(3000,function(){
    console.log('Server Started On Port 3000')
  // db.fetchCoinMarketCap();
}) 


app.use(express.static('public'));