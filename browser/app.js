
var app = angular.module('myApp', []);

app.controller('mainController', function($http, $scope) {

	$scope.getItems = function(){
		$http.get('/items')
		.then(function(items) {
			//console.log('items: ',items);
			$scope.items = items.data;
		});
	};

	$scope.addItem = function() {
		$http.post('/addItem', {name: $scope.newName, priority: $scope.newPriority})
		.then(function(newItem){
			return $scope.getItems();
		});
	};

	$scope.getItems();

});