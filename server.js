var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 8000;

var app = express();

//view engine, tell system our views are in views forlder
app.set('views', path.join(__dirname,'views'));

app.set('view engine', 'ejs');
//render apps with http extention
app.engine('html',require('ejs').renderFile);


// set static folder  for angular stuff
app.use(express.static(path.join(__dirname,'client')));

//body parser Middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//for api
app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log('Server started on port ' + port );
});
