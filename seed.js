const db = require('./db');

const Stocks = require('./db/stocks')

// seed the table with 30 hardcoded companies info

const stocks = [
        {
            company_name: "3M",
            stock_symbol: "MMM"
        },
        {
            company_name: "American Express",
            stock_symbol: "AXP"
        },
        {
            company_name: "Apple",
            stock_symbol: "AAPL"
        },
        {
            company_name: "Boeing",
            stock_symbol: "BA"
        },
        {
            company_name: "Caterpillar",
            stock_symbol: "CAT"
        },
        {
            company_name: "Chevron",
            stock_symbol: "CVX"
        },
        {
            company_name: "Cisco",
            stock_symbol: "CSCO"
        },
        {
            company_name: "Coca-Cola",
            stock_symbol: "KO"
        },
        {
            company_name: "The Walt Disney Company",
            stock_symbol: "DIS"
        },
        {
            company_name: "DowDuPont",
            stock_symbol: "DWDP"
        },
        {
            company_name: "ExxonMobil",
            stock_symbol: "XOM"
        },
        {
            company_name: "General Electric",
            stock_symbol: "GE"
        },
        {
            company_name: "Goldman Sachs",
            stock_symbol: "GS"
        },
        {
            company_name: "The Home Depot",
            stock_symbol: "HD"
        },
        {
            company_name: "IBM",
            stock_symbol: "IBM"
        },
        {
            company_name: "Intel",
            stock_symbol: "INTC"
        },
        {
            company_name: "Johnson & Johnson",
            stock_symbol: "JNJ"
        },
        {
            company_name: "JPMorgan Chase",
            stock_symbol: "JPM"
        },
        {
            company_name: "McDonald's",
            stock_symbol: "MCD"
        },
        {
            company_name: "Merck",
            stock_symbol: "MRK"
        },
        {
            company_name: "Microsoft",
            stock_symbol: "MSFT"
        },
        {
            company_name: "Nike",
            stock_symbol: "NKE"
        },
        {
            company_name: "Pfizer",
            stock_symbol: "PFE"
        },
        {
            company_name: "Procter & Gamble",
            stock_symbol: "PG"
        },
        {
            company_name: "Travelers Companies, Inc.",
            stock_symbol: "TRV"
        },
        {
            company_name: "United Technologies",
            stock_symbol: "UTX"
        },
        {
            company_name: "UnitedHealth",
            stock_symbol: "UNH"
        },
        {
            company_name: "Verizon",
            stock_symbol: "VZ"
        },
        {
            company_name: "Visa",
            stock_symbol: "V"
        },
        {
            company_name: "Wal-Mart",
            stock_symbol: "WMT"
        }
    ]

db.stocks.bulkCreate(stocks)
.then(()=>{
    return db.stocks.findAll();
})