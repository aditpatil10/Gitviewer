var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    var onUserComplete = function(response){
    	$scope.user = response.data;
    };

    $http.get("https://api.github.com/users/aditpatil10")
    .then(onUserComplete);
});