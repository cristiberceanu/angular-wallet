'use strict';

/**
 * @ngdoc overview
 * @name angularWalletApp
 * @description
 * # angularWalletApp
 *
 * Main module of the application.
 */
angular
  .module('angularWalletApp', [
    'ngAnimate',
    'ngTouch',
    'ngRoute',
    'LocalStorageModule'
  ]);

angular.module('angularWalletApp').config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider){
  $routeProvider.when('/', {
    templateUrl:'views/main.html',
    controller: 'MainCtrl'
  });

  $routeProvider.otherwise('/404');
  $locationProvider.html5Mode(false).hashPrefix("!");

}]);
