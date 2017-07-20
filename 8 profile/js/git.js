var app = angular.module('myApp', []);
app.controller('pro1', function($scope, $http) {
    var onUserComplete = function(response){
    	$scope.user = response.data;
    };

    $http.get("https://api.github.com/users/aditpatil10")
    .then(onUserComplete);
});
app.controller('pro2', function($scope, $http) {
    var onUserComplete = function(response){
    	$scope.user = response.data;
    };

    $http.get("https://api.github.com/users/Abhijeet020497")
    .then(onUserComplete);
});
app.controller('pro3', function($scope, $http) {
    var onUserComplete = function(response){
    	$scope.user = response.data;
    };

    $http.get("https://api.github.com/users/ShettyHarshit")
    .then(onUserComplete);
});
app.controller('pro4', function($scope, $http) {
    var onUserComplete = function(response){
    	$scope.user = response.data;
    };

    $http.get("https://api.github.com/users/burhanuddinrampurawala")
    .then(onUserComplete);
});
app.controller('pro5', function($scope, $http) {
    var onUserComplete = function(response){
    	$scope.user = response.data;
    };

    $http.get("https://api.github.com/users/angular")
    .then(onUserComplete);
});
app.controller('pro6', function($scope, $http) {
    var onUserComplete = function(response){
    	$scope.user = response.data;
    };

    $http.get("https://api.github.com/users/angular")
    .then(onUserComplete);
});
app.controller('pro7', function($scope, $http) {
    var onUserComplete = function(response){
    	$scope.user = response.data;
    };

    $http.get("https://api.github.com/users/angular")
    .then(onUserComplete);
});
app.controller('pro8', function($scope, $http) {
    var onUserComplete = function(response){
    	$scope.user = response.data;
    };

    $http.get("https://api.github.com/users/angular")
    .then(onUserComplete);
});