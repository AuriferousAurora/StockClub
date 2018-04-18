// Application Program Interface for IEX Trading.
var url = 'https://api.iextrading.com/1.0/stock/';
// NPM Axios; allows for easy XMLHttpRequest.
const axios = require('axios');
// Array of ticker symbols for the thirty DOW stocks.
var DOW = ['MMM', 'AXP', 'AAPL', 'BA', 'CAT', 'CVX', 'CSCO', 'KO', 'DIS', 'DWDP', 'XOM', 'GE', 'GS', 'HD', 'IBM', 'INTC', 'JNJ', 'JPM', 'MCD', 'MRK', 'MSFT', 'NKE', 'PFE', 'PG', 'TRV', 'UTX', 'UNH', 'VZ', 'V', 'WMT'];

// A forEach loop is run on the DOW array. For each index in the array, the symbol is used in a GET Request from the IEX API, returning the most current price for that stock ('response.data'). The ticker symbol and the response data are then logged to the console.

DOW.forEach(function(symbol) {  
    axios.get(url + symbol + "/price")
    .then(function(response) {
    console.log("Symbol: " + symbol + ", Price: " + response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
});

