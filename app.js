var express = require('express');
// var reload = require('reload');
var path = require('path');
const db = require('./db');
const passport = require('passport');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')

// require session and passpot local strategy
const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy

var app = express();



app.set('view engine', 'ejs');
app.set('Views');

app.use(express.static(__dirname + "/Public"));


app.use(require('./Routes/manager'));
app.use(require('./Routes/login'));
app.use(require('./Routes/profile'));
app.use(require('./Routes/ranking'));



// import passport and database
app.post('/signup', function(req, res){
    let username = req.body.username;
    let password = bcrypt.hashSync(req.body.password, 10);
    let email = req.body.email;


    let user = db.users.build({
        userName: username,
        password: password,
        emailAddress: email,
    })

    user.save();
    db.users.sync();

    res.redirect('/manager');

})
// passport and encrypt passport

// login and authenticate
app.use(session({secret: 'top secret'}));
passport.use(new LocalStrategy(
    function (username, password, done) {
        db.users.findOne({
            where: {
                userName: username
            }
        }).then(function(result){
            bcrypt.compare(password, result.password, function(err, res) {
                if(res) {
                    console.log("found user");
                    console.log(result.id);
                    return done(null, {id: result.id, username: result.userName})
                }
            })
        })
        console.log('username, passowrd: ', username, password);
        if( authenticate(username,password)) {

        }
    }
));

passport.serializeUser( function(user, password, done) {
    conso
})



var server = app.listen(3000,function(){
    console.log('Stock Project listening port 3000')
});
