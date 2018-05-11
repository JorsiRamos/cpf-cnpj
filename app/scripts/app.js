'use strict';

/**
 * @ngdoc overview
 * @name cpfCnpjApp
 * @description
 * # cpfCnpjApp
 *
 * Main module of the application.
 */
angular
  .module('cpfCnpjApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.utils.masks'
  ])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
      $httpProvider.defaults.withCredentials = true;
  });
