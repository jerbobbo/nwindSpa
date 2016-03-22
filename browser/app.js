
var app = angular.module('myApp', []);

app.controller('mainController', function($http, $scope) {

  //don't put things on scope that don't have to be on scope
	var getItems = function(){
		$http.get('/items')
		.then(function(items) {
			console.log('items: ',items.data);
			$scope.items = items.data;
		});
	};

	$scope.addItem = function() {
    //you could use object properties with ng-model
    //example <input ng-model='newItem.name' />
    //example <input ng-model='newItem.priority' />
    //this way you can do $http.post('/addItem', newItem)
		$http.post('/addItem', {name: $scope.newName, priority: $scope.newPriority})
		.then(function(){
			return getItems();
		});
	};

	$scope.swapUp = function(index) {
		var oldVal = $scope.items[index];
		$scope.items[index] = $scope.items[index-1];
		$scope.items[index-1] = oldVal;
		$scope.reOrder();
	};

	$scope.swapDown = function(index) {
		var oldVal = $scope.items[index];
		$scope.items[index] = $scope.items[index+1];
		$scope.items[index+1] = oldVal;
		reOrder();
	};

	var reOrder = function() {
		//console.log('reordering', $scope.items);
		$http.post('/reorder', {itemArray: $scope.items})
		.then(function() {
			getItems();
		});
	};

	getItems();

});
