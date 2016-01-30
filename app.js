var express = require('express');
var app = express();
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.get('/github', function(req, res) {
  res.redirect('https://github.com/tomphilbin');
});

app.get('/stackoverflow', function(req, res) {
  res.redirect('http://stackoverflow.com/users/1584074/tom-p');
})

app.listen(port, function() {
  console.log('Listening on port ' + port + '.');
});
