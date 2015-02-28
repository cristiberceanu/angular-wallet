'use strict';

describe('Service: Wallet', function () {

  // load the service's module
  beforeEach(module('angularWalletApp'));

  // instantiate service
  var Wallet, Currency;
  beforeEach(inject(function (_Wallet_, _Currency_) {
    Wallet = _Wallet_;
    Currency = _Currency_;
  }));

  it('should create Wallet factory', function () {
    expect(!!Wallet).toBe(true);
  });

  it('should create a wallet for euro', function(){
    var euroCurrency = Currency.getCurrency('EUR');
    var wallet = Wallet.getWallet(euroCurrency);
    // verify if wallet has any banknotes in it
    var walletKeys = Object.keys(wallet);
    expect(walletKeys.length).not.toEqual(0);

    // wallet should be empty
    angular.forEach(wallet.banknotes, function(banknote){
      expect(banknote.amount).toEqual(0);
    });
  });

});
