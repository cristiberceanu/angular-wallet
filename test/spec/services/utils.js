'use strict';

describe('Service: Utils', function () {

  // load the service's module
  beforeEach(module('angularWalletApp'));

  // instantiate service
  var Utils;
  beforeEach(inject(function (_Utils_) {
    Utils = _Utils_;
  }));

  it('should do something', function () {
    expect(!!Utils).toBe(true);
  });

  it('should verify if isNumeric works', function(){

    expect(Utils.isNumeric([])).toEqual(false);
    expect(Utils.isNumeric(1)).toEqual(true);
    expect(Utils.isNumeric(NaN)).toEqual(false);
    expect(Utils.isNumeric(1.2)).toEqual(true);
    expect(Utils.isNumeric(-0.1)).toEqual(true);
    expect(Utils.isNumeric({})).toEqual(false);
    expect(Utils.isNumeric('')).toEqual(false);
    expect(Utils.isNumeric('2.4')).toEqual(true);
  });

});
