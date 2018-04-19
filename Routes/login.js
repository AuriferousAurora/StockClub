var express = require('express');
var router = express.Router();

router.get('/login', function(req,res){
    
    res.render('login');

})

router.post('/login' , function(req, res) {
    models.users.findOne({
        where:{
            username : req.body.username,
            password : req.body.password
        }
    })
} )


module.exports = router;