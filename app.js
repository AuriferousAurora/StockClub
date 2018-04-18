var express = require('express');
// var reload = require('reload');
var path = require('path');
app = express();

app.set('view engine', 'ejs');
app.set('Views');

app.use(express.static(__dirname + "/Public"));


app.use(require('./Routes/manager'));
app.use(require('./Routes/login'));
app.use(require('./Routes/profile'));
app.use(require('./Routes/ranking'));



var server = app.listen(3000,function(){
    console.log('Stock Project listening port 3000')
});
