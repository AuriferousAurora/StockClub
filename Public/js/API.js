var promise = require('bluebird');
var options = {
    promiseLib : promise
  };
var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/stockClub'
var db = pgp(connectionString);


db.one('SELECT * from stocks where id= 1')
  .then((results) => {
      results.forEach((result) => {
        // output stocksymbols
        let symbol = result.stockSymbol
        let url = "https://api.iextrading.com/1.0/stock/" + symbol +"/price"
        // api request
        $.ajax({
            method: "GET",
            url: url,
            dataType: "json",
            success:
                function(data)  {
                    console.log(data)
                }
            
          });
  })
})