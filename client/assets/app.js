var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/customers', {
		templateUrl: 'partials/customers.html',
		controller: 'customerController'
	})
	.when('/products', {
		templateUrl: 'partials/products.html',
		controller: 'productController'
	})
	.when('/orders', {
		templateUrl: 'partials/orders.html',
		controller: 'orderController'
	})
	.otherwise({
		redirectTo: '/'
	})
})