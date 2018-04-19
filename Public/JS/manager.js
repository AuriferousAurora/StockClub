// Application Program Interface for IEX Trading.
var url = 'https://api.iextrading.com/1.0/stock/';
<<<<<<< HEAD
// NPM Axios; allows for easy XMLHttpRequest.
const axios = require('axios');
// Array of ticker symbols for the thirty DOW stocks.
var dow = ['MMM', 'AXP', 'AAPL', 'BA', 'CAT', 'CVX', 'CSCO', 'KO', 'DIS', 'DWDP', 'XOM', 'GE', 'GS', 'HD', 'IBM', 'INTC', 'JNJ', 'JPM', 'MCD', 'MRK', 'MSFT', 'NKE', 'PFE', 'PG', 'TRV', 'UTX', 'UNH', 'VZ', 'V', 'WMT'];
=======
>>>>>>> kyle

// let dowPriceObject = [{'MMM': null}, {'AXP': null}, {'AAPL': null}, {'BA': null}, {'CAT': null}, {'CVX': null}, {'CSCO': null}, {'KO': null}, {'DIS': null}, {'DWDP': null}, {'XOM': null}, {'GE': null}, {'GS': null}, {'HD': null}, {'IBM': null}, {'INTC': null}, {'JNJ': null}, {'JPM': null}, {'MCD': null}, {'MRK': null}, {'MSFT': null}, {'NKE': null}, {'PFE': null}, {'PG': null}, {'TRV': null}, {'UTX': null}, {'UNH': null}, {'VZ': null}, {'V': null}, {'WMT': null}];

let dowTickSymbols = ['MMM', 'AXP', 'AAPL', 'BA', 'CAT', 'CVX','CSCO', 'KO', 'DIS', 'DWDP', 'XOM', 'GE', 'GS', 'HD', 'IBM', 'INTC', 'JNJ', 'JPM', 'MCD', 'MRK', 'MSFT', 'NKE', 'PFE', 'PG', 'TRV', 'UTX', 'UNH', 'VZ', 'V', 'WMT'];

var responseObject = [];
var symbolCounter = 0;  

    dowTickSymbols.forEach(function(symbol) {  
        axios.get(url + symbol + "/price")
        .then(function(response) {
        const object = {Symbol: dowTickSymbols[symbolCounter], Price: response.data};
        responseObject.push(object);
        symbolCounter += 1;
        return responseObject;
        })   
        .then(function(response) {   
        let symbol = document.querySelectorAll('.symbol');
        let price = document.querySelectorAll('.price');
        console.log(symbol);
        for (var i = 0; i < 31; i++) {
            symbol[i].innerHTML = response[i]['Symbol'];
            price[i].innerHTML = response[i]['Price'];
        }
        })
        .catch(function(error) {
            console.log(error);
        })
    })
<<<<<<< HEAD
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
=======

console.log(responseObject);
>>>>>>> kyle
