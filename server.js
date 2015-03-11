var express = require('express');
var app = express();

var port=8080;

app.get('/',function(request, response){
  response.send('Welcome');
});

app.listen(port, function(){
  console.log("Server started");
});
