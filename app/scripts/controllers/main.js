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

    // get from localStorage or set it as empty array
    var storageTransactions = localStorageService.get('transactions');
    if(storageTransactions){
      $scope.transactions = storageTransactions;
    } else {
      $scope.transactions = [];
      localStorageService.set('transactions', []);
    }

    // get the currency from localStorage or set it to first option
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
      // add at the beginning of the list
      $scope.transactions.unshift({type:'add', value: banknote.name, date: new Date()});
    };

    $scope.removeMoney = function(banknote){
      $scope.wallet.total -= banknote.name;
      // add at the beginning of the list
      $scope.transactions.unshift({type:'remove', value: banknote.name, date: new Date()})
    };

    localStorageService.bind($scope, 'wallet');
    localStorageService.bind($scope, 'transactions');
  });
