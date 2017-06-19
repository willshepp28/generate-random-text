var express = require('express');
var loremIpsum = require('lorem-ipsum');

var output = loremIpsum();
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/lorem', function(req, res) {
     res.sendFile(__dirname + '/lorem.html');
});



app.listen(3000, function() {
    console.log('Listening on port 3000');
});