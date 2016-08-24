var express = require('express');
//create a new instance of our application
var app = express();
var server = require('http').Server(app);


app.get('/', function(req, res){
	res.send("hello world.");
	console.log("something connected to express");
});

server.listen('8080');

