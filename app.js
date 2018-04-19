var express = require('express');
// var reload = require('reload');
var path = require('path');
app = express();

app.set('view engine', 'ejs');
app.set('Views');

app.use(express.static(__dirname + "/Public"));


app.use(require('./Routes/manager'));
<<<<<<< HEAD
app.use(require('./Routes/profile'));
=======
app.use(require('./Routes/login'));
app.use(require('./Routes/profile'));
app.use(require('./Routes/ranking'));

>>>>>>> ec17e78849d24daa7b2e95aee0818b4efaa28ee2


var server = app.listen(3000,function(){
    console.log('Stock Project listening port 3000')
});
