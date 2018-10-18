var express = require('express');
var compression = require('compression');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(compression);

app.get('/', function (req, res) {
  res.send('Gabriel\'s Mayta Assets');
});

app.listen(port, function() {
    console.log('App is running on port: ' + port);
});