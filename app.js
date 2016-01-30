var express = require('express');
var app = express();

app.get('/github', function(req, res) {
  res.redirect('https://github.com/tomphilbin');
});

app.get('/stackoverflow', function(req, res) {
  res.redirect('http://stackoverflow.com/users/1584074/tom-p');
})

app.listen(80);
