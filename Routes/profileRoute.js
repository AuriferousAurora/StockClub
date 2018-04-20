var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('../db')

router.get('/profile', function(req,res){
    
    if(req.isAuthenticated()) {
        loginUserId = req.user.id;
        db.transactiontable.findAll({
            where: {
                userId: loginUserId,
            }
        }).then((results) => {
            res.render('profile',{data: results})
        })
    } else {
        res.redirect('login')
    }
    
    res.render('profile');

})


module.exports = router;