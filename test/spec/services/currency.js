'use strict';

describe('Service: Currency', function () {

  // load the service's module
  beforeEach(module('angularWalletApp'));

  // instantiate service
  var Currency;
  beforeEach(inject(function (_Currency_) {
    Currency = _Currency_;
  }));

  it('should be created', function () {
    expect(!!Currency).toBe(true);
  });

  it('should check if EUR currency is set up', function () {
    var eurCurrency = Currency.getCurrency('EUR');
    expect(eurCurrency.banknotes.length).not.toEqual(0);
    expect(eurCurrency.symbol).toBeDefined();
  });

  it('should return null if currency doesn\'t exist', function (){
    var inexistingCurrency = Currency.getCurrency('IDK');
    expect(inexistingCurrency).toBeNull();
  });

  it('should check if currency list is not empty', function () {
    expect(Currency.getCurrenciesList().length).not.toEqual(0);
  });



});
