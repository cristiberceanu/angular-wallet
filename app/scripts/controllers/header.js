'use strict';

/**
 * @ngdoc function
 * @name angularWalletApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller created for the top menu of the index.html page
 */
angular.module('angularWalletApp')
  .controller('HeaderCtrl', function ($scope, localStorageService, $route, $window) {
    $scope.location = $window.location.href;
    $scope.resetStorage = function(){
      localStorageService.clearAll();
      // reset current route to show changes taking place
      $route.reload();
    }
  });
