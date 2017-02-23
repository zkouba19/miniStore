app.factory('customerFactory', ['$http', function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get('/customers').then(function(returned_data){
			console.log('**************************', returned_data.data);
			callback(returned_data.data);
		})
	}
	factory.create = function(newCustomer, callback){
		$http.post('/customers', newCustomer).then(function(returned_data){
			console.log(returned_data.data);
			if(typeof(callback) == 'function'){
      			callback(returned_data.data);
      		}
		})
	}
	factory.delete = function(id, callback){
		$http.delete('/customers/'+id).then(function(returned_data){
			if(typeof(callback) == 'function'){
				console.log("##############", returned_data.data);
	 			callback(returned_data.data);
      		}
		})
	}
	return factory
}]);