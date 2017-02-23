var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
	name: {type: String, required: true},
	imageUrl: {type: String, required: true},
	description: {type: String, required: true},
	quantity: {type: Number, min: 1, max: 150},
}, {timestamps: true});

var Product = mongoose.model('Product', ProductSchema)