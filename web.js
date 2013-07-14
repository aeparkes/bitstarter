var express = require('express');

var app = express.createServer(express.logger());

var textdisplay = new Buffer("Well hello there World!", "utf-8")

app.get('/', function(request, response) {
  response.send(textdisplay);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
