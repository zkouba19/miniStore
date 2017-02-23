var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = {
	index: function(req, res){
		Customer.find({}, function(err, customers){
			if(err){
				console.log("could not find customers");
			} else {
				console.log("Found customers");
				res.json({customers});
			}
		})
	},

	create: function(req, res){
		var data = req.body;
		var newCustomer = new Customer({customerName: data.customerName})
		newCustomer.save(function(err){
			if(err){
				console.log('unable to save new customer');
			} else {
				console.log('able to save customer');
				res.json({newCustomer});
			}
		})
	},

	delete: function(req, res){
		Customer.remove({_id: req.params.id}, function(err){
			if(err){
				console.log('unable to delete the customer');
			} else {
				console.log('able to delete user');
				res.json({message: "friend delted"});
			}
		})
	}
}