var express = require('express');
var router = express.Router();

router.get('/manager', function(req,res){
    
    res.render('manager');

})

// to post data from the manager page
router.post('/manager', function(req, res) {
    models.transactions.create({
        stockSymbol: req.body.stockSymbol,
        numberOfShares: req.body.numberOfShares,
        purchasePrice: req.body.purchasePrice,
        // get userid from sessions  

    })
})

module.exports = router;