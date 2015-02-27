'use strict';

/**
 * @ngdoc function
 * @name angularWalletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWalletApp
 */
angular.module('angularWalletApp')
  .controller('MainCtrl', function ($scope) {
    $scope.wallet = {
      total: 30,
      addHistory: [10, 30],
      removeHistory: [10]
    }

  });
