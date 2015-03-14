var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port=8080;

app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/src', express.static(__dirname + '/src'));
app.set('view engine','ejs');
app.set('views', __dirname + '/views');

app.get('/',function(request, response){
  response.send('hello');
});

app.get('/menu',function(request, response){
  fs.readFile('public/menu.json','utf8',function(err,data){
    var menu = JSON.parse(data)
    response.send(menu[0].prices );  
  });
});

app.get('/main', function(request,response){
  response.render('mainMenu');
});

app.listen(port, function(){
  console.log("Server started");
});