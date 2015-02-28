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

angular.module('angularWalletApp').config(['$routeProvider', '$locationProvider', 'localStorageServiceProvider', '$compileProvider',
  function($routeProvider, $locationProvider, localStorageServiceProvider, $compileProvider){
    $routeProvider.when('/', {
      templateUrl:'views/main.html',
      controller: 'MainCtrl'
    });

    $routeProvider.otherwise('/404');
    $locationProvider.html5Mode(false).hashPrefix("!");

    //config for local storage
    localStorageServiceProvider
      .setPrefix('angularWalletApp')
      .setStorageType('localStorage');

    // so we can have view-source: url :)
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(view-source):/);

  }]);
