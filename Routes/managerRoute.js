var express = require('express');
var router = express.Router();
var passport = require('passport')
const db = require('../db')

router.get('/manager', function(req,res){
    // console.log(req.user)
    console.log(req.isAuthenticated())
    if(req.isAuthenticated()){
        userId = req.user.id;
        db.users.findOne({
            where: {
                id: userId
            }
        }).then((result)=>{
            res.render('manager',{data: result})
        })
    } else {
        res.redirect('login')
    }
    // res.render('manager');

})

router.post('/manager', function(req, res){
    userId = req.user.id;
    console.log(userId)
    db.users.findOne({
        where: {
            id: userId
        }
    }).then((result)=>{
        res.render('manager',{data: result})
    })

    
    

    // res.render('manager')

})


module.exports = router;