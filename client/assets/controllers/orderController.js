app.controller('orderController', ['$scope', '$location', 'orderFactory', 'productFactory', 'customerFactory', function($scope, $location, orderFactory, productFactory, customerFactory){
	$scope.orders = [];
	$scope.products = [];
	$scope.customers = [];
	var index = function(){
		orderFactory.index(function(data){
			console.log(data);
			$scope.orders = data.orders;
		})
		customerFactory.index(function(data){
			console.log(data);
			$scope.customers = data.customers;
		})
		productFactory.index(function(data){
			console.log(data);
			$scope.products = data.products;
		})
	}
	index();
	$scope.create = function(){
		console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@",$scope.order)
		orderFactory.create($scope.order, function(data){
			$scope.orders = data.orders;
			$scope.order = {};
			index();
		})
	}
}]);