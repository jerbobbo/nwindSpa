var express = require('express');
var http = require('http');
var app = require('./app');
var chalk = require('chalk');

var server = http.createServer();
server.on('request', app);

server.listen(3000, function() {
	console.log(chalk.green('listening on port 3000'));
});