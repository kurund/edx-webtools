var express = require('express');

//instantiate Express
var app = express();

var server = require('http').createServer(app);
var root = __dirname;
app.use(express.static(root));

//Start the server
app.listen(3000, function(){
  console.log("Express running on port 3000.");
});
