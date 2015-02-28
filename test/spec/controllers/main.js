'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularWalletApp'));

  var MainCtrl,
    scope,
    localStorageService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Currency_, _Wallet_, _localStorageService_) {
    scope = $rootScope.$new();
    localStorageService = _localStorageService_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      Currency: _Currency_,
      Wallet: _Wallet_,
      localStorageService: localStorageService
    });
  }));

  it('should create controller', function () {
    expect(!!MainCtrl).toBe(true);
  });

  it('should create a wallet with all the attributes', function(){
    // the wallet should have banknotes
    expect(scope.wallet.banknotes).toBeDefined();

    //the wallet should have a currency
    expect(scope.wallet.currency).toBeDefined();

    //the wallet should have total set to 0
    expect(scope.wallet.total).toEqual(0);
  });

  it('should have a transactions attribute', function(){
    expect(scope.transactions).toBeDefined();
  });

  it('should get the wallet from localStorage', function(){
    localStorageService.set('wallet', globals.mockWallet);
    expect(scope.wallet.banknotes[0].ammount).toEqual(globals.mockWallet.banknotes[0].ammount);

    //currency has to match wallet currency
    expect(scope.wallet.currency).toEqual(scope.currentCurrency);
  });

  it('should create a new wallet', function(){
    localStorageService.set('wallet', globals.mockWallet);
    scope.createWallet();
    expect(scope.wallet.currency.symbol).not.toEqual(globals.mockWallet.currency.symbol);

    //currency has to match wallet currency
    expect(scope.wallet.currency).toEqual(scope.currentCurrency);

  });

  it('should add money to wallet total', function(){
    var currentTotal = scope.wallet.total;
    var transactionsLength = scope.transactions.length;

    scope.addMoney(globals.mockBanknote);
    expect(scope.wallet.total).toEqual(currentTotal+globals.mockBanknote.name);
    expect(scope.transactions.length).toEqual(transactionsLength+1);
  });

  it('should remove money from wallet total', function(){
    var currentTotal = scope.wallet.total;
    var transactionsLength = scope.transactions.length;

    scope.removeMoney(globals.mockBanknote);
    expect(scope.wallet.total).toEqual(currentTotal-globals.mockBanknote.name);
    expect(scope.transactions.length).toEqual(transactionsLength+1);
  });

});
