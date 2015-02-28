'use strict';

/**
 * @ngdoc function
 * @name angularWalletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWalletApp
 */
angular.module('angularWalletApp')
  .controller('MainCtrl', function ($scope, Currency, Wallet, localStorageService) {
    $scope.currencies = Currency.getCurrenciesList();
    var currentCurrency = localStorageService.get('currentCurrency');
    if(currentCurrency){
      $scope.currentCurrency = Currency.getCurrency(currentCurrency.name);
    } else {
      $scope.currentCurrency = $scope.currencies[0];
    }


    $scope.createWallet = function () {
      localStorageService.set('currentCurrency', $scope.currentCurrency);
      $scope.wallet = Wallet.getWallet(Currency.getCurrency($scope.currentCurrency.name));
      localStorageService.set('wallet', $scope.wallet);
    };


    var walletStorageValue = localStorageService.get('wallet');

    // set wallet values from localStorage if possible
    if(walletStorageValue != null){
      $scope.wallet = walletStorageValue;
    } else { // else create a new one
      $scope.createWallet();
    }

    $scope.addMoney = function(banknote){
      $scope.wallet.total += banknote.name;
    };

    $scope.removeMoney = function(banknote){
      $scope.wallet.total -= banknote.name;
    };

    localStorageService.bind($scope, 'wallet');

  });
