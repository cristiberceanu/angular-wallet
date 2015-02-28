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

    $scope.createWallet = function () {
      $scope.wallet = Wallet.getWallet(Currency.getCurrency($scope.currentCurrency));
    };

    $scope.currencies = Currency.getCurrenciesList();
    $scope.currentCurrency = $scope.currencies[0];


    $scope.updateTotal = function(){
      $scope.total = 0;
      angular.forEach($scope.wallet, function(banknote){
        var castTotal = parseInt(banknote.ammount);

        if(isNaN(castTotal))
          $scope.total += 0;
        else
          $scope.total += castTotal * parseInt(banknote.name);
      });

    };

    $scope.addMoney = function(banknote){
      $scope.total += banknote.name;
    };

    $scope.removeMoney = function(banknote){
      $scope.total -= banknote.name;
    };

    $scope.createWallet();
    $scope.updateTotal();




  });
