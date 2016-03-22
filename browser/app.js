
var app = angular.module('myApp', []);

app.controller('mainController', function($http, $scope) {

	$scope.getItems = function(){
		$http.get('/items')
		.then(function(items) {
			//console.log('items: ',items);
			$scope.items = items.data;
		});
	};

	$scope.getItems();

});