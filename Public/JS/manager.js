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
    let hiddenSymbol = document.querySelectorAll('.hiddenTick');
    let hiddenPrice = document.querySelectorAll('.hiddenPrice');
  
    setTimeout(function(){
        for (var i = 0; i < 30; i++) {
            symbol[i].innerHTML = responseObject[i]['Symbol'];
            price[i].innerHTML = responseObject[i]['Price'];
            hiddenSymbol[i].value = responseObject[i]['Symbol'];
            hiddenPrice[i].value = responseObject[i]['Price'];
        }
    }, 1000)
});


$('#submitbtn').on('click',function(e){
    e.preventDefault(),
    $('.modal').modal('show')
    if($('input').val()){
        $(".modal-body").html("<p>Purchase completed!</p>")
    } else {
        $(".modal-body").html("<p>Invalid transaction!</p>")
    }
})




// dowTickSymbols.forEach((element)=>{
//     var callback =function(response){
//         responseObject.push({element: response})
//     }
//     $.ajax({
//         url: url + element +"/price",
//         success: function(response){
//             let obj={}
//             obj[element] = response
//             responseObject.push(obj)
//         }
//     })
    
// })
// console.log(responseObject)

// var listCounter = 1
// function createStockList(symbol, price){
    
//     $(".stockList").append("<li/>",{
//         id:list + listCounter
//     });
//     $("#list" + listCounter).append("<form />",{
//         id:"form" + listCounter
//     });
//     $("#form" + listCounter).append("<div />",{
//         className:"form-group row",
//         id:symbol+listCounter
//     });
//     $("#"+symbol+listCounter).append("<div />",{
//         className:"col-sm-2",
//         id:symbol+"row"
//     });
//     $("#"+symbol+"row").append("<label />",{
//         id:symbol,
//         html:symbol
//     })
// }