'use strict';

/**
 * @ngdoc factory
 * @name angularWalletApp.Currency
 * @description
 * Define the currencies supported along with the the different banknotes we can have inside
 Different currencies can have different banknotes, for example Euro cannot support 0.0001 EUR but Bitcoin can
 * Factory in the angularWalletApp.
 */
angular.module('angularWalletApp')
  .factory('Currency', function () {


    var currenciesSpecs = {
      USD: {
        banknotes: [1, 5, 10, 50, 100],
        symbol: 'fa-usd'
      },
      EUR: {
        banknotes: [1, 2, 5, 10, 50, 100, 200, 500],
        symbol: 'fa-eur'
      },
      BTC: {
        banknotes: [0.00001, 1, 2, 5],
        symbol: 'fa-btc'
      }
    };

    return {
      getCurrency: function (currency) {
        return currenciesSpecs[currency] || null;
      },
      getCurrenciesList: function(){
        return Object.keys(currenciesSpecs);
      }
    };
  });
