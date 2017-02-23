var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
	customerName: {type: String, required: true},  
}, {timestamps: true});

var Customer = mongoose.model('Customer', CustomerSchema)