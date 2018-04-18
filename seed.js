const db = require('./db');

// const Stocks = require('./db/stocks')

// seed the stocks table with 30 hardcoded companies info

const stocks = [
        {
            companyName: "3M",
            stockSymbol: "MMM"
        },
        {
            companyName: "American Express",
            stockSymbol: "AXP"
        },
        {
            companyName: "Apple",
            stockSymbol: "AAPL"
        },
        {
            companyName: "Boeing",
            stockSymbol: "BA"
        },
        {
            companyName: "Caterpillar",
            stockSymbol: "CAT"
        },
        {
            companyName: "Chevron",
            stockSymbol: "CVX"
        },
        {
            companyName: "Cisco",
            stockSymbol: "CSCO"
        },
        {
            companyName: "Coca-Cola",
            stockSymbol: "KO"
        },
        {
            companyName: "The Walt Disney Company",
            stockSymbol: "DIS"
        },
        {
            companyName: "DowDuPont",
            stockSymbol: "DWDP"
        },
        {
            companyName: "ExxonMobil",
            stockSymbol: "XOM"
        },
        {
            companyName: "General Electric",
            stockSymbol: "GE"
        },
        {
            companyName: "Goldman Sachs",
            stockSymbol: "GS"
        },
        {
            companyName: "The Home Depot",
            stockSymbol: "HD"
        },
        {
            companyName: "IBM",
            stockSymbol: "IBM"
        },
        {
            companyName: "Intel",
            stockSymbol: "INTC"
        },
        {
            companyName: "Johnson & Johnson",
            stockSymbol: "JNJ"
        },
        {
            companyName: "JPMorgan Chase",
            stockSymbol: "JPM"
        },
        {
            companyName: "McDonald's",
            stockSymbol: "MCD"
        },
        {
            companyName: "Merck",
            stockSymbol: "MRK"
        },
        {
            companyName: "Microsoft",
            stockSymbol: "MSFT"
        },
        {
            companyName: "Nike",
            stockSymbol: "NKE"
        },
        {
            companyName: "Pfizer",
            stockSymbol: "PFE"
        },
        {
            companyName: "Procter & Gamble",
            stockSymbol: "PG"
        },
        {
            companyName: "Travelers Companies, Inc.",
            stockSymbol: "TRV"
        },
        {
            companyName: "United Technologies",
            stockSymbol: "UTX"
        },
        {
            companyName: "UnitedHealth",
            stockSymbol: "UNH"
        },
        {
            companyName: "Verizon",
            stockSymbol: "VZ"
        },
        {
            companyName: "Visa",
            stockSymbol: "V"
        },
        {
            companyName: "Wal-Mart",
            stockSymbol: "WMT"
        }
    ]
db.stocks.sync({force:true})
.then(() => {
db.stocks.bulkCreate(stocks)})
.then(()=>{
    return db.stocks.findAll();
})

const users = [
    {
        userName: "blabla",
        password: '1234',
        emailAddress: 'user@gmail.com',
        updateTime: db.users.NOW,
    }
]
db.users.sync({force:true})
.then(() => {
    db.users.bulkCreate(users)
})