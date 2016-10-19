var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/spooky', function(req, res){
  res.send('Scary Skeletons!');
});

app.get('/monsters', function(req, res){
  res.send(['Vampires', 'Werewolves', 'Mummies', 'Lizard People']);
});

app.listen(3000);
