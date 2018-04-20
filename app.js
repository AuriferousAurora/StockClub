var express = require('express');
var Sequelize = require('sequelize')
var reload = require('reload');
var path = require('path');
const db = require('./db');
const expressValidator = require('express-validator');
const passport = require('passport');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')


// require session and passpot local strategy
const session = require('express-session')
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var connection = new Sequelize('postgres://localhost:5432/stockClub');
const cookieParser = require('cookie-parser')

const LocalStrategy = require('passport-local').Strategy

var app = express();



app.set('view engine', 'ejs');
app.set('Views');

app.use(express.static(__dirname + "/Public"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(expressValidator())

var myStore = new SequelizeStore({
    db: connection
})
//setting session information
app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    store: myStore,
    resave: false,
    proxy: true
}))

myStore.sync();
// app.use(session({
//     secret: "top secret",
//     resave: false,
//     saveUninitialized:false,
//     // cookie: { maxAge: 14 * 24 * 60 * 60 * 1000 }
// }))
app.use(passport.initialize())  
app.use(passport.session())

app.use(require('./Routes/managerRoute'));
app.use(require('./Routes/login'));
app.use(require('./Routes/profileRoute'));
app.use(require('./Routes/rankingRoute'));
app.use(require('./Routes/signup'))



// login and authenticate
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
                        // console.log(sess)
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
    console.log(user.id, "hahaha")
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    db.users.findById(id).then(function(result) {
        if (result == null)
        {
            return done(err)
        }
        console.log(result.dataValues, 'deserial')
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
    req.session.destroy((err=>{
        req.logout()
    }));
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
