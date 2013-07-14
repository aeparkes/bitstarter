var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var contentsofindex = fs.readFileSync('index.html');

var textdisplay = new Buffer();

textdisplay.write(contentsofindex)
textdisplay.toString("utf-8")

app.get('/', function(request, response) {
  response.send('textdisplay');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
