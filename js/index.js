var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http,$interval,$anchorScroll,$location) {
 var onUserComplete = function(response){
   $scope.user = response.data;
   $http.get($scope.user.repos_url)
   .then(onRepos,onError);
 }
 var onRepos = function(response){
   $scope.repos = response.data;
   $location.hash("Details");
   $anchorScroll();
 };
  var decrementCountdown = function(){
    $scope.countdown -= 1;
    if($scope.countdown<1){
      $scope.search($scope.username);
    }
  };
  var countdownInterval = null;
  var startCountdown = function(){
   countdownInterval = $interval(decrementCountdown,1000,10);
  };
 var onError = function(reason){
   $scope.error="Could not fetch the data";
 };
  $scope.search = function(username){
    $http.get("https://api.github.com/users/" + username)
  .then(onUserComplete);
    if(countdownInterval){
      $interval.cancel(countdownInterval);
      $scope.countdown=null;
    }
  }
  
  
  $scope.username="angular";
  $scope.message="adi10 ka Gitviewer";
  $scope.repoSortOrder="+stargazers_count";
  $scope.countdown=10;
  startCountdown();
});