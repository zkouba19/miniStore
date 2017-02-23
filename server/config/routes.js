var mongoose = require('mongoose');
var Customers = mongoose.model('Customer');
var Products = mongoose.model('Product');
var Orders = mongoose.model('Order');
var CustomerController = require('./../controllers/customersController.js');
var ProductController = require('./../controllers/productsController.js');
var OrderController = require('./../controllers/ordersController.js');

module.exports = function(app){
	app.get('/products', function(req, res){
		ProductController.index(req, res);
	});
	app.post('/products', function(req, res){
		ProductController.create(req, res);
	});
	app.get('/orders', function(req, res){
		OrderController.index(req, res);
	});
	app.post('/orders', function(req, res){
		OrderController.create(req, res);
	});
	app.get('/customers', function(req, res){
		CustomerController.index(req, res);
	});
	app.post('/customers', function(req, res){
		CustomerController.create(req, res);
	});
	app.delete('/customers/:id', function(req, res){
		CustomerController.delete(req, res);
	});

}