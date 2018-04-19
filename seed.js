const db = require('./db');
const transactiontable = require('./db/transactiontable')
// seed the transactiontable table with 30 hardcoded companies info
const Transactiontable = [
        {
            stockSymbol: "MMM",
            numberOfShares: "10",
            purchasePrice: "12",
            purchaseTime: "12:34",
            userId: 1}
    ]

db.transactiontable.sync({force:true})
.then(() => {
db.transactiontable.bulkCreate(Transactiontable)})
.then(()=>{
    return db.transactiontable.findAll();
})

