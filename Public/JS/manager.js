// Application Program Interface for IEX Trading.
var url = 'https://api.iextrading.com/1.0/stock/';

<<<<<<< HEAD
// Array of ticker symbols for the thirty DOW stocks.

var dow = ['MMM', 'AXP', 'AAPL', 'BA', 'CAT', 'CVX', 'CSCO', 'KO', 'DIS', 'DWDP', 'XOM', 'GE', 'GS', 'HD', 'IBM', 'INTC', 'JNJ', 'JPM', 'MCD', 'MRK', 'MSFT', 'NKE', 'PFE', 'PG', 'TRV', 'UTX', 'UNH', 'VZ', 'V', 'WMT'];

// A forEach loop is run on the DOW array. For each index in the array, the symbol is used in a GET Request from the IEX API, returning the most current price for that stock ('response.data'). The ticker symbol and the response data are then logged to the console.
function getData() {
    dow.forEach(function(symbol) {  
        var responseObject = [];
=======
let dowPriceObject = [{'MMM': null}, {'AXP': null}, {'AAPL': null}, {'BA': null}, {'CAT': null}, {'CVX': null}, {'CSCO': null}, {'KO': null}, {'DIS': null}, {'DWDP': null}, {'XOM': null}, {'GE': null}, {'GS': null}, {'HD': null}, {'IBM': null}, {'INTC': null}, {'JNJ': null}, {'JPM': null}, {'MCD': null}, {'MRK': null}, {'MSFT': null}, {'NKE': null}, {'PFE': null}, {'PG': null}, {'TRV': null}, {'UTX': null}, {'UNH': null}, {'VZ': null}, {'V': null}, {'WMT': null}];

let dowTickSymbols = ['MMM', 'AXP', 'AAPL', 'BA', 'CAT', 'CVX','CSCO', 'KO', 'DIS', 'DWDP', 'XOM', 'GE', 'GS', 'HD', 'IBM', 'INTC', 'JNJ', 'JPM', 'MCD', 'MRK', 'MSFT', 'NKE', 'PFE', 'PG', 'TRV', 'UTX', 'UNH', 'VZ', 'V', 'WMT'];


// A forEach loop is run on the DOW array. For each index in the array, the symbol is used in a GET Request from the IEX API, returning the most current price for that stock ('response.data'). The ticker symbol and the response data are then logged to the console.
// dowPriceObject[0]['MMM'] = 143;
// console.log(dowPriceObject);

// function getData() {
//     for (var i = 0; i < dowTickSymbols.length; i++) {
//         axios.get(url + dowTickSymbols[i] + "/price")
//         .then(function(response) {
            
//         })
//         .catch(function(error) {
//             console.log(error);
//         });
  
//     }
// }

var responseObject = [];
var symbolCounter = 0;  

    dowTickSymbols.forEach(function(symbol) {  
>>>>>>> fc1f966cb48a7f9c2590a58eb6ab27c6d9d9b94f
        axios.get(url + symbol + "/price")
        .then(function(response) {
        const object = {price: response.data, symbol: dowTickSymbols[symbolCounter]};
        responseObject.push(object);
        symbolCounter += 1;
        return responseObject;
        })        
        // let symbol = document.querySelectorAll('.symbol');
        // console.log(symbol);
        // for (var i = 0; i < 31; i++) {
        //     symbol[i].innerHTML = modifiedResponse[;
        // }
        .catch(function(error) {
            console.log(error);
        })
<<<<<<< HEAD
    })
}
console.log(getData());
var dowPrices = getData();
=======

>>>>>>> fc1f966cb48a7f9c2590a58eb6ab27c6d9d9b94f


<<<<<<< HEAD
    for (var i = 0; i <= 30; i++) {
        symbol[i].innerHTML = "hello";
        price[i].innerHTML = dowPrices[i];
    }
}

populateHTML(dowPrices);
=======
    });
console.log(responseObject);

// getData();
// let symbol = document.querySelectorAll('.symbol');
// console.log(symbol);
// for (var i = 0; i < 31; i++) {
//     symbol[i].innerHTML = "hello";
// }


>>>>>>> fc1f966cb48a7f9c2590a58eb6ab27c6d9d9b94f
