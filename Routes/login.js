var express = require('express');
var router = express.Router();
var passport = require('passport')

router.get('/login', function(req,res){
    console.log(req.user);
    console.log(req.isAuthenticated())
    if(req.isAuthenticated()){
        res.redirect('manager');
    } else (
        res.render('login')
    )
    
})


module.exports = router;