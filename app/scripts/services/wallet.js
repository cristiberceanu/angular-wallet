'use strict';

/**
 * @ngdoc service
 * @name angularWalletApp.wallet
 * @description
 * # wallet
 * This factory receives a Currency as a parameter and returns the wallet for that currency
 * For example, for Currency EUR:{banknotes:[1,2,5]} it will return
 * wallet: {1:0, 2:0, 5:0}(all values are set to 0 in the beginning)
 */
angular.module('angularWalletApp')
  .factory('Wallet', function () {
    return {
      getWallet: function (currency) {
        var wallet = {
          banknotes: [],
          currency: {},
          total: 0
        };
        angular.forEach(currency.banknotes, function(banknote){
          wallet['banknotes'].push({name: banknote, amount: 0});
        });
        wallet['currency'] = currency;
        wallet['total'] = 0;
        return wallet;
      }
    };
  });
