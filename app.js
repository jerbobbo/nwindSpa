var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/browser')));
app.use('/vendor', express.static(path.join(__dirname, '/node_modules')));

app.use(bodyParser.json());
//we need this?
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes'));

app.use(function(err, req, res, next) {
	console.log(err);
	res.status(500).send(err);
});

module.exports = app;
