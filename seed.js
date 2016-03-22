var models = require('./models').models;

var newItems = [
{name:'potatoes', priority:1},
{name:'carrots', priority:2}
];

function seed() {
	models.Item.remove({})
	.then(function() {
		return models.Item.create(newItems);
	})
	.then(function(items){
		console.log('new Items created: ', items);
		process.exit(0);
		})
	.catch(console.log);
}

seed();

