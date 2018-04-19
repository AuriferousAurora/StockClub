var express = require('express');
var reload = require('reload');
var path = require('path');
const db = require('./db');
const passport = require('passport');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')

const cookieParser = require('cookie-parser')

// require session and passpot local strategy
const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy

var app = express();



app.set('view engine', 'ejs');
app.set('Views');

app.use(express.static(__dirname + "/Public"));

app.use(cookieParser())
app.use(passport.initialize())  
app.use(passport.session())
app.use(bodyParser.urlencoded({extended:true}))

app.use(require('./Routes/signup'));
app.use(require('./Routes/manager'));
app.use(require('./Routes/login'))
app.use(require('./Routes/signup'));
// app.use(require('./Routes/profile'));


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


var sess = {
    secret: "top secret",
    cookie: {}
}

// login and authenticate
app.use(session(sess));
passport.use(new LocalStrategy(
    function (username, password, done) {
        db.users.findOne({
            where: {
                userName: username
            }
        }).then(function(result){
            if(result!== null) {
                bcrypt.compare(password, result.password, function(err, res) {
                    if(res) {
                        console.log("found user");
                        console.log(result.id);
                        return done(null, {id: result.id, username: result.userName})
                    } else {
                        console.log('did not find user');
                        done(null, false)
                    }
                })
            } else {
                console.log('did not find user');
                done(null, false)}
        })
    }
));

passport.serializeUser( function(user, done) {
    console.log('serializing user: Id:')
    console.log(user.id)
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    db.users.findById(id).then(function(result) {
        if (result == null)
        {
            return done(err)
        }
        console.log(result.dataValues)
        done(null, result.dataValues)
    })
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/manager',
        failureRedirect: '/signup'
    })
);

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
})

const isAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    return next()
}

app.get('/manager', isAuthenticated, (req, res) => {
    res.render('manager', {user: req.user});
});

var server = app.listen(3000,function(){
    console.log('Stock Project listening port 3000')
});
