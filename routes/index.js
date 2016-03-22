var express = require('express');
var router = express.Router();
var models = require('../models/').models;
var Item = models.Item;

router.get('/', function(req, res, next) {
	res.send('index.js');
});

router.get('/items', function(req, res, next) {
	Item.find({})
	.then(function(results) {
		res.send(results);
	});
});

router.post('/addItem', function(req, res, next) {
	Item.create({name: req.body.name, priority: req.body.priority})
	.then(function(newItem) {
		res.send(newItem);
	});
});

module.exports = router;