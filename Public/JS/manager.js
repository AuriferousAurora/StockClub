// Application Program Interface for IEX Trading.
var url = 'https://api.iextrading.com/1.0/stock/';
// NPM Axios; allows for easy XMLHttpRequest.
const axios = require('axios');
// Array of ticker symbols for the thirty DOW stocks.
var dow = ['MMM', 'AXP', 'AAPL', 'BA', 'CAT', 'CVX', 'CSCO', 'KO', 'DIS', 'DWDP', 'XOM', 'GE', 'GS', 'HD', 'IBM', 'INTC', 'JNJ', 'JPM', 'MCD', 'MRK', 'MSFT', 'NKE', 'PFE', 'PG', 'TRV', 'UTX', 'UNH', 'VZ', 'V', 'WMT'];

// A forEach loop is run on the DOW array. For each index in the array, the symbol is used in a GET Request from the IEX API, returning the most current price for that stock ('response.data'). The ticker symbol and the response data are then logged to the console.
function getData() {
    dow.forEach(function(symbol) {  
        var responseObject = [];
        get(url + symbol + "/price")
        .then(function(response) {
        // console.log("Symbol: " + symbol + ", Price: " + response.data);
        const object = [symbol, response.data];
        responseObject.push(object);
        return responseObject;
        })
        .then(responseObject => console.log(responseObject))
        .catch(function(error) {
            console.log(error);
        })
    })
}

var dowPrices = getData();

function populateHTML(stocks) {
    let symbol = document.querySelectorAll('.symbol');
    let price = document.querySelectorAll('.price');

    for (var i = 0; i < stocks.length; i++) {
        symbol[i].innerHTML = dowPrices[i];
        price[i].innerHTML = dowPrices[i];
    }
}

populateHTML(dowPrices);