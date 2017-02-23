var mongoose = require('mongoose');
var Orders = mongoose.model('Order');
module.exports = {
	index: function(req, res){
		Orders.find({}).populate('customer').populate('product').exec(function(err, orders){
			if(err){
				console.log("could not find orders");
			} else {
				console.log("Found orders");
				console.log(orders)
				res.json({orders});
			}
		})
	},
	create: function(req, res){
		var data = req.body;
		var newOrder = new Orders({customer: data.customer, product: data.product, quantity: data.quantity})
		newOrder.save(function(err){
			if(err){
				console.log("unable to create new order");
			} else {
				console.log('successfully created new order');
				res.json({newOrder});
			}
		})
	}
}