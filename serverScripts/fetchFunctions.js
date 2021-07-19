var tools = require("./tools"); //Usefull functions
var insertFunct = require("./insertFunctions")
const {
    URLSearchParams
} = require('url'); // enables usage of query string in URL

const fetch = require('node-fetch'); //Library used for fetching data

module.exports.fetchCoinMarketCap = () => {
    console.log("CoinMarketCap");
    var cryptos = ['BTC', 'ETH', 'USDT']
    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?' + new URLSearchParams({ //ES6 approach
            symbol: cryptos
        }), {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': 'e582845a-77fc-4540-b28a-5f98d26fddb7',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(tools.handleErrors) //function for handling errors
        .then(response => response.json())
        .then(function (data) {
            //Inserting data in to databox
            for (let i = 0; i < 3; i++) {
                cryptoSymbol = cryptos[i];
                console.log((i + 1) + ". funkcija");
                insertFunct.insertWithTime(data.data[cryptoSymbol].quote.USD.market_cap, data.data[cryptoSymbol].name, tools.getDateTime(), "ranked_cryptos")
            }
        })
        .catch(
            error => console.log(error)
        );
}

module.exports.fetchCoinBase = () => {
    //fetch ETH    
    fetch('https://api.coinbase.com/v2/prices/ETH-EUR/buy')
        .then(tools.handleErrors)
        .then(response => response.json())
        .then(function (data) {
            console.log('Time je' + tools.getDateTime())
            insertFunct.insertWithTime(data.data.amount, 'ETH', tools.getDateTime(), "crypto_prices");
        })
        .catch(error => console.log(error));
    //fetch BTC
    fetch('https://api.coinbase.com/v2/prices/BTC-EUR/buy')
        .then(tools.handleErrors)
        .then(response => response.json())
        .then(function (data) {
            insertFunct.insert(data.data.amount, "BTC", "crypto_prices");
        })
        .catch(error => console.log(error));
    //fetch DOGE
    fetch('https://api.coinbase.com/v2/prices/DOGE-EUR/buy')
        .then(tools.handleErrors)
        .then(response => response.json())
        .then(function (data) {
            insertFunct.insert(data.data.amount, "DOGE", "crypto_prices");
        })
        .catch(error => console.log(error));
}