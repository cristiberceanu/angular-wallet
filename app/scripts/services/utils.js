'use strict';

/**
 * @ngdoc service
 * @name angularWalletApp.Utils
 * @description
 * # Utils
 * Factory in the angularWalletApp.
 */
angular.module('angularWalletApp')
  .factory('Utils', function ($filter) {
    return {
      isNumeric: function (n){
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
    };
  });
