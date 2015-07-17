var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.sendStatus(200);
});

app.set('port', 1337);

app.listen(app.get('port'), function(){
  console.log('Listening on port %d', app.get('port'));
});
