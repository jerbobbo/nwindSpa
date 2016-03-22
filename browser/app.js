
var app = angular.module('myApp', []);

app.controller('mainController', function($http, $scope) {

	$scope.getItems = function(){
		$http.get('/items')
		.then(function(items) {
			console.log('items: ',items.data);
			$scope.items = items.data;
		});
	};

	$scope.addItem = function() {
		$http.post('/addItem', {name: $scope.newName, priority: $scope.newPriority})
		.then(function(newItem){
			console.log('item added to items: ', $scope.items);
			return $scope.getItems();
		});
	};

	$scope.swapUp = function(index) {
		//console.log(index);
		var oldVal = $scope.items[index];
		$scope.items[index] = $scope.items[index-1];
		$scope.items[index-1] = oldVal;
		//console.log($scope.items);
		$scope.reOrder();
	};

	$scope.swapDown = function(index) {
		//console.log(index);
		var oldVal = $scope.items[index];
		$scope.items[index] = $scope.items[index+1];
		$scope.items[index+1] = oldVal;
		//console.log($scope.items);
		$scope.reOrder();
	};

	$scope.reOrder = function() {
		//console.log('reordering', $scope.items);
		$http.post('/reorder', {itemArray: $scope.items})
		.then(function(item) {
			return $scope.getItems();
		});
	};

	$scope.getItems();
	//$scope.reOrder();

});