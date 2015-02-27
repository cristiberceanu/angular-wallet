'use strict';

/**
 * @ngdoc function
 * @name angularWalletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWalletApp
 */
angular.module('angularWalletApp')
  .controller('MainCtrl', function ($scope, Currency, Wallet) {
    $scope.createWallet = function(){
      $scope.wallet = Wallet.getWallet(Currency.getCurrency($scope.currentCurrency));
      console.log($scope.wallet);
    };

    $scope.currencies = Currency.getCurrenciesList();
    $scope.currentCurrency = $scope.currencies[0];

    $scope.createWallet();

  });
