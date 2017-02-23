app.controller('customerController', ['$scope', '$location', 'customerFactory', function($scope, $location, customerFactory){
	$scope.customers = [];
	var index = function(){
		customerFactory.index(function(data){
			console.log(data);
			$scope.customers = data.customers;
		})
	}
	index();
	$scope.create = function(){
		customerFactory.create($scope.customer, function(data){
			$scope.customers = data.customers;
			$scope.customer = {};
			index();
		})
	}

	$scope.delete = function(id){
		customerFactory.delete(id, function(data){
			index();
		})
	}
}]);