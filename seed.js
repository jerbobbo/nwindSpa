// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/nwindspa');
var models = require('./models').models;

var newItems = [
{name:'potatoes', priority:1},
{name:'carrots', priority:2}
];

models.Item.remove({})
.then(function() {
	return models.Item.create(newItems);
})
.then(function(items){
	return console.log('new Items created: ', items);
	})
.catch(console.log);
