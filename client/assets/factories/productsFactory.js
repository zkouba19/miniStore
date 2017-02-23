app.factory('productFactory', ['$http', function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get('/products').then(function(returned_data){
			console.log(returned_data.data);
			if(typeof(callback) == 'function'){
      			callback(returned_data.data);
      		}
		})
	}
	factory.create = function(newProduct, callback){
		$http.post('/products', newProduct).then(function(returned_data){
			if(typeof(callback) == 'function'){
      			callback(returned_data.data);
      		}
		})
	}
	return factory
}]);