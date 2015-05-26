'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherApp')
  .controller('mainController', ['$scope', '$location', 'locationService', function ($scope, $location, locationService) {
    
    $scope.locationValue= locationService.location;
      
    $scope.$watch('locationValue', function() {
        locationService.location = $scope.locationValue;
    });
      
    $scope.submit = function() {
        $location.path('/weather/2');
    };
      
  }]);
