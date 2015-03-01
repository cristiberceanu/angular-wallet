'use strict';

/**
 * @ngdoc service
 * @name angularWalletApp.Transaction
 * @description
 * # Transaction
 * Future feature: Support a wallet with multiple currencies
 * This means having currency-independent add/remove functions
 * Service will try to remove currency and throw error in case it's not possible
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
