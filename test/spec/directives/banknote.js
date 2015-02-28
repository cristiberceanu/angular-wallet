'use strict';

describe('Directive: banknote', function () {

  // load the directive's module
  beforeEach(module('angularWalletApp'));

  var element,
    scope,
    innerScope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<banknote banknote="{value:1, amount:0}" add="addMoney(banknote)" remove="removeMoney(banknote)"></banknote>');
    element = $compile(element)(scope);
    innerScope = element.isolateScope();

  }));

  it('should increase amount of a certain banknote', inject(function () {

    //click add button
    element.find('.btn-success').click();
    element.find('.btn-success').click();
    element.find('.btn-success').click();

    expect(innerScope.banknote).not.toEqual(0);

  }));
  it('should show error when banknotes amount is 0', function(){
    innerScope = element.isolateScope();
    // click remove button should make ngForm invalid
    element.find('.btn-danger').click();
    expect(innerScope.form.$invalid).toBeTruthy();



  });
});
