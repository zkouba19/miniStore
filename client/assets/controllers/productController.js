app.controller('productController', ['$scope', '$location', 'productFactory', function($scope, $location, productFactory){
	$scope.products = [];
	var index = function(){
		productFactory.index(function(data){
			console.log(data);
			$scope.products = data.products;
		})
	}
	index();
	$scope.create = function(){
		productFactory.create($scope.product, function(data){
			console.log(data);
			$scope.products = data.products;
			index();
			$scope.product = {};
		})
	}
}]);