var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');

var app = express();

var stringifyFile = '';

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
  fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    stringifyFile = data;
    res.send(data);
  });
});

app.post('/updateNote/:note', function(req, res) {
  stringifyFile += req.params.note;
  fs.writeFile('./test.json', stringifyFile, function(err) {
    if (err) throw err;
    res.send('OK!');
    console.log('file updated');
  });
});

var server = app.listen(3000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});

// app.get('/ab*cd', function(req, res) {
//     console.log('Otrzymałem żądanie GET do strony /ab*cd');
//     res.send('Wzór pasuje');
// });
