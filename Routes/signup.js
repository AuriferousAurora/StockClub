var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');
const expressValidator = require('express-validator');



router.get('/signup', function(req,res){
    
    res.render('signup',{errors:false});

})

// import passport and database
router.post('/signup', function(req, res, next){

    req.checkBody('username', 'Username field cannot be empty.').notEmpty();
    req.checkBody('username', 'Username must be between 4-15 characters long.').len(4, 15);
    req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
    req.checkBody('email', 'Email address must be between 4-100 characters long, please try again.').len(4, 100);
    req.checkBody('password', 'Password must be between 8-100 characters long.').len(8, 100);
    req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
    req.checkBody('passwordMatch', 'Password must be between 8-100 characters long.').len(8, 100);
    req.checkBody('passwordMatch', 'Passwords do not match, please try again.').equals(req.body.password);

    const errors = req.validationErrors();
    if(errors){
        console.error(errors)
        console.log(`errors: ${JSON.stringify(errors)}`)
        res.render('signup', {errors: errors,});
    } else {
        const username = req.body.username;
        const password = bcrypt.hashSync(req.body.password, 10);
        const email = req.body.email;


        let user = db.users.build({
            userName: username,
            password: password,
            emailAddress: email,
        })

        user.save();
        db.users.sync();

        res.redirect('/manager');
    }



})
// passport and encrypt passport



module.exports = router;