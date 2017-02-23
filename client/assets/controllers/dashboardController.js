app.controller('dashboardController', ['$scope', '$location', 'orderFactory', 'customerFactory', 'productFactory', function($scope, $location, orderFactory, customerFactory, productFactory){
	$scope.orders = [];
	$scope.customers = [];
	$scope.products = [];
	var index = function(){
		orderFactory.index(function(data){
			console.log('+++++++++++order+++++++++++++++++', data);
			$scope.orders = data.orders
		})
		customerFactory.index(function(data){
			console.log('+++++++++++customer+++++++++++++++++', data);
			$scope.customers = data.customers;
		})
		productFactory.index(function(data){
			console.log('+++++++++++product+++++++++++++++++', data);
			$scope.products = data.products;
		})
	}
	index();
}]);
