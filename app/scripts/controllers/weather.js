'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherApp')
  .controller('weatherController', ['$scope', '$routeParams', 'locationService', 'forecastService', function ($scope, $routeParams, locationService, forecastService) {
    $scope.locationValue = locationService.location;
      
 //   console.log("Days Passed in is: " + $routeParams.days);
    
    $scope.days = $routeParams.days;
      
    $scope.weatherResult = forecastService.getWeather($scope.locationValue, $routeParams.days);
      
    $scope.convertToFahrenhite = function(kelv) {
        return Math.round((1.8 * (kelv - 273)) + 32);
    };
      
    $scope.convertToDate = function(dateinMilli) {
        return new Date(dateinMilli * 1000);
    };
      
  }]);
