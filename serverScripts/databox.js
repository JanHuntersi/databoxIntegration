const Databox = require('databox'); //DataBox Api

const { URLSearchParams } = require('url');    // enables usage of query string in URL

const fetch = require('node-fetch'); //Library used for fetching data

require('dotenv').config(); //saving env variables -> Api keys

//console.log(process.env);


//Function returns Date&Time in correct TimeFormat
function getDateTime() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}


        //Databox auth
var client = new Databox({
    push_token: process.env.DB_API_KEY
});

//Handling fetch errors
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response;
}


//Function pushes data, name to DataBox
//




//Metric fot ETH is going to show values through out the day
function insertWithTime(data, name, date,key) {
    console.log("Klican je bil insertWithTime!");
    console.log("Data:" + data + ", name je :" + name + " time: ");
    client.push({
        key: key,
        value: data,
        date: date,
        attributes: {
            'crypto': name
        }
    }, function (response) {
        console.log(response)
    });
}


function insert(data, name, key) {
    console.log("Klican je bil insert");
    console.log("Data:" + data + ", name je :" + name);
    client.push({
        key: key,   //metrics key
        value: data,
        attributes: {
            'crypto': name
        }
    }, function (response) {
        console.log(response)
    });
}
/*
fetch('https://api.coinbase.com/v2/prices/ETH-EUR/buy')
    .then(handleErrors)
    .then(response => response.json())
    .then(function (data) {
        console.log('Time je'+ getDateTime() )
        insertWithTime(data.data.amount,'ETH',getDateTime(),"crypto_prices");
    })
    .catch(error => console.log(error));
fetch('https://api.coinbase.com/v2/prices/BTC-EUR/buy')
    .then(handleErrors)
    .then(response => response.json())
    .then(function (data) {
        insert(data.data.amount, "BTC","crypto_prices");
    })
    .catch(error => console.log(error));
fetch('https://api.coinbase.com/v2/prices/DOGE-EUR/buy')
    .then(handleErrors)
    .then(response => response.json())
    .then(function (data) {
        insert(data.data.amount, "DOGE","crypto_prices");
    })
    .catch(error => console.log(error));
*/
       //                                                //        
     //---------------------CoinMarketCap--------------//
    //                                               //
console.log("CoinMarketCap");

var cryptos=['BTC','ETH','USDT','BNB','ADA']
    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?' + new URLSearchParams({    //ES6 approach
    symbol:cryptos
    }),{
    method: 'GET',
    headers:{
        'X-CMC_PRO_API_KEY': 'e582845a-77fc-4540-b28a-5f98d26fddb7',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(function (data){
       for(let i=0; i<5; i++){
           cryptoSymbol=cryptos[i];
           // console.log("market cap: " + data.data[cryptoSymbol].quote.USD.market_cap+", name: "+data.data[cryptoSymbol].name+", key: "+"ranked_cryptos"); 
            insert(data.data[cryptoSymbol].quote.USD.market_cap,data.data[cryptoSymbol].name,"ranked_cryptos")
        }        
    })
    .catch(error => console.log(error));