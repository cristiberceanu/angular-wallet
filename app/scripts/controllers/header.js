'use strict';

/**
 * @ngdoc function
 * @name angularWalletApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the angularWalletApp
 */
angular.module('angularWalletApp')
  .controller('HeaderCtrl', function ($scope, localStorageService, $route) {
    $scope.resetStorage = function(){
      localStorageService.clearAll();
      // reset current route to show changes taking place
      $route.reload();
    }
  });