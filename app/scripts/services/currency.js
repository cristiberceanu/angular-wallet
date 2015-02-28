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


    var currenciesSpecs = [
      {
        name:'USD',
        banknotes: [1, 5, 10, 50, 100],
        symbol: 'fa-usd'
      },
      {
        name:'EUR',
        banknotes: [1, 2, 5, 10, 50, 100, 200, 500],
        symbol: 'fa-eur'
      },
      {
        name:'BTC',
        banknotes: [0.1, 1, 2, 5],
        symbol: 'fa-btc'
      }
    ];

    return {
      getCurrency: function (currency) {
        var result = null;
        angular.forEach(currenciesSpecs, function(currentCurrency){
          if(currentCurrency.name == currency)
            result = currentCurrency;
        });
        return result;
      },
      getCurrenciesList: function(){
        return currenciesSpecs;
      }
    };
  });
