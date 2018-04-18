const stockArray = ['MMM', 'AXP', 'BA', 'AAPL', 'CAT', 'CVX', 'CSCO','KO','DIS', 'DWDP', 'XOM', 'GE', 'GS', 'HD', 'IBM', 'INTC', 'JNJ', 'JPM', 'MCD','MRK', 'MSFT', 'NKE', 'PFE', 'WMT', 'V', 'VZ', 'UNH', 'UTX', 'TRV','PG'];
let newarr = [];
stockArray.forEach(sym => {
    axios.get("https://api.iextrading.com/1.0/stock/" + sym + "/price")
        .then(res => {
            const obj = {sym: sym, price: res.data};
            newarr.push(obj);
            return newarr
        })
        .then(arr => console.log(arr))
        .catch(err => console.log(err))
})