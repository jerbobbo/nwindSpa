var express = require('express');
var router = express.Router();
var models = require('../models/').models;
var Item = models.Item;
var Promise = require('bluebird');

router.get('/', function(req, res, next) {
	res.send('index.js');
});

router.get('/items', function(req, res, next) {
	Item.find({}).sort({priority:1})
	.then(function(results) {
		console.log('sorted: ', results);
		res.send(results);
	});
});

router.post('/addItem', function(req, res, next) {
	var priorityInt = +req.body.priority || 5;
	Item.create({name: req.body.name, priority: priorityInt})
	.then(function(newItem) {
		res.send(newItem);
	});
});

router.post('/reorder', function(req, res, next) {
	console.log(req.body);
	var items = req.body.itemArray;
	Promise.each(items, function(item, index) {
		Item.findById(item._id)
		.then(function(_item) {
			_item.priority = index+1;
			_item.save();
		});
	});
	res.send(items);
});

module.exports = router;