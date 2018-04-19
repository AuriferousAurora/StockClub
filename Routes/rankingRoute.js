var express = require('express');
var router = express.Router();

router.get('/ranking', function(req,res){
    
    res.render('ranking');

})


module.exports = router;