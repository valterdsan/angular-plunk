(function() {

  var app = angular.module('githubViewer');

  var MainController = function($scope, $interval, $location) {

    $scope.username = 'angular';
    $scope.countdown = 5;

    var countdownInterval = null;
    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };
    
    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    $scope.search = function(username) {

      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      
      $location.path("/user/" + username);
      
    };

    startCountdown();

  };

  app.controller("MainController", [
    "$scope", "$interval", "$location", MainController
  ]);

}());