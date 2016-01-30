var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

app.get('/github', function(req, res) {
  res.redirect('https://github.com/tomphilbin');
});

app.get('/stackoverflow', function(req, res) {
  res.redirect('http://stackoverflow.com/users/1584074/tom-p');
});

http.createServer(app).listen(app.get('port') ,app.get('ip'), function () {
  console.log('Listening on at %s:%d ', app.get('ip'),app.get('port'));
});
