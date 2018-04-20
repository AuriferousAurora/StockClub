// Application Program Interface for IEX Trading.
var url = 'https://api.iextrading.com/1.0/stock/';

// let dowPriceObject = [{'MMM': null}, {'AXP': null}, {'AAPL': null}, {'BA': null}, {'CAT': null}, {'CVX': null}, {'CSCO': null}, {'KO': null}, {'DIS': null}, {'DWDP': null}, {'XOM': null}, {'GE': null}, {'GS': null}, {'HD': null}, {'IBM': null}, {'INTC': null}, {'JNJ': null}, {'JPM': null}, {'MCD': null}, {'MRK': null}, {'MSFT': null}, {'NKE': null}, {'PFE': null}, {'PG': null}, {'TRV': null}, {'UTX': null}, {'UNH': null}, {'VZ': null}, {'V': null}, {'WMT': null}];

let dowTickSymbols = ['MMM', 'AXP', 'AAPL', 'BA', 'CAT', 'CVX','CSCO', 'KO', 'DIS', 'DWDP', 'XOM', 'GE', 'GS', 'HD', 'IBM', 'INTC', 'JNJ', 'JPM', 'MCD', 'MRK', 'MSFT', 'NKE', 'PFE', 'PG', 'TRV', 'UTX', 'UNH', 'VZ', 'V', 'WMT'];

var responseObject = [];
var symbolCounter = 0; 
var object 

// Instantiates a promise named 'call'. This promise contains a forEach function that loops through the 'dowTickSymbols' array. For each pass through, the ticker symbol and the current price of the stock is appended to the responseOjbect array.
var call = new Promise((resolve, reject) => {
    dowTickSymbols.forEach(function(symbol) {  
        axios.get(url + symbol + "/price")
        .then(function(response) {
        object = {Symbol: symbol, Price: response.data};
        responseObject.push(object);
        symbolCounter += 1;
        })  
        .catch(function(error) {
            console.log(error);
        })
    })
    resolve(responseObject);
}).then((response) => {  
    let symbol = document.querySelectorAll('.symbol');
    let price = document.querySelectorAll('.price'); 
    setTimeout(function(){
        for (var i = 0; i < 31; i++) {
            symbol[i].innerHTML = responseObject[i]['Symbol'];
            price[i].innerHTML = responseObject[i]['Price'];
        }
    }, 1000)
});
