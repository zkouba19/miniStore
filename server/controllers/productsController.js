var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = {
	index: function(req, res){
		Product.find({}, function(err, products){
			if(err){
				console.log("could not find products");
			} else {
				console.log("Found products");
				res.json({products});
			}
		})
	},
	create: function(req, res){
		var data = req.body
		var product = new Product({name: data.name, imageUrl: data.imageUrl, description: data.description, quantity: data.quantity });
		product.save(function(err){
			if(err){
				console.log('could not create new product');
			} else {
				console.log('successfully created product');
				res.json({product});
			}
		})
	}

}