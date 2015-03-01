'use strict';

/**
 * @ngdoc service
 * @name angularWalletApp.Utils
 * @description
 * # Utils
 * Hold all the extra functions you need along the way
 */
angular.module('angularWalletApp')
  .factory('Utils', function () {
    return {
      isNumeric: function (n){
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
    };
  });
