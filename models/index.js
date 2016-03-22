var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nwindspa');

var itemSchema = mongoose.Schema({
	name: {type: String, require:true},
	priority: {type: Number, default:5}
});

var Item = mongoose.model('item', itemSchema);

module.exports = {
	models: {
		Item: Item
	}
};