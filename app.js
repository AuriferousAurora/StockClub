var express = require('express');
// var reload = require('reload');
var path = require('path');
app = express();

app.set('view engine', 'ejs');
app.set('Views');

app.use(express.static(__dirname + "/Public"));

app.use(require('./Routes/managerRoute'));
app.use(require('./Routes/loginRoute'));
app.use(require('./Routes/profileRoute'));
app.use(require('./Routes/rankingRoute'));

var server = app.listen(3000,function(){
    console.log('Stock Project listening port 3000')
});
