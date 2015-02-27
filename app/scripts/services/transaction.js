'use strict';

/**
 * @ngdoc service
 * @name angularWalletApp.Transaction
 * @description
 * # Transaction
 * Transaction handles adding/removing sums of money from wallets
 *
 */
angular.module('angularWalletApp')
  .factory('Transaction', function () {

    return {
      add: function (currency, wallet, sum) {

      },
      remove: function(currency, wallet, sum){

      }
    };
  });
