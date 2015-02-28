'use strict';

/**
 * @ngdoc directive
 * @name angularWalletApp.directive:banknote
 * @description
 * # banknote
 */
angular.module('angularWalletApp')
  .directive('banknote', function () {
    return {
      template: '<ng-form name="form" class="col-xs-12">'+
      '<div class="col-xs-2">'+
      '<span class="pull-right" style="font-size: 17px; padding-top:5px;">'+
      '<b> {{banknote.name}} {{currency.name}}:</b>'+
      '</span>'+
      '</div>'+
      '<div class="input-group col-xs-4" style="padding-bottom:10px;">'+
      '<span class="input-group-btn">'+
      '<button class="btn btn-success" type="button" ng-click="addMoney()"><b>+</b></button>'+
      '</span>'+
      '<span type="text" class="form-control">'+
      '<input type="hidden" name="amount" ng-model="banknote.amount">'+
      '{{banknote.amount}}'+
      '</span>'+
      '<span class="input-group-btn">'+
      '<button class="btn btn-danger" type="button" ng-click="removeMoney()"><b>-</b></button>'+
      '</span>'+
      '</div>'+
      '<span class="col-xs-offset-2 col-xs-4" class="error-message" ng-show="form.$error.zeroAmount">You\'re out of <i class="fa {{currency.symbol}}"></i>{{banknote.name}} bills</span>'+
      '</ng-form>',
      restrict: 'E',
      scope:{
        banknote: "=banknote",
        currency:"=currency",
        add: "&",
        remove: "&"
      },
      link: function postLink(scope, element) {

        scope.addMoney = function(){
          scope.banknote.amount++;

          //call controller function
          scope.add();
          scope.form.$setValidity('zeroAmount', true);
        };

        scope.removeMoney = function(){
          if(scope.banknote.amount > 0){
            scope.banknote.amount--;

            //call controller function
            scope.remove();
          } else {
            scope.form.$setValidity('zeroAmount', false);
          }
        };


      }
    };
  });
