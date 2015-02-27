'use strict';

describe('Service: Transaction', function () {

  // load the service's module
  beforeEach(module('angularWalletApp'));

  // instantiate service
  var Transaction;
  beforeEach(inject(function (_Transaction_) {
    Transaction = _Transaction_;
  }));

  it('should create the Transaction factory', function () {
    expect(!!Transaction).toBe(true);
    expect(!!Transaction.add).toBe(true);
    expect(!!Transaction.remove).toBe(true);
  });



});
