'use strict';

/**
 * @ngdoc overview
 * @name moving-crud
 * @description
 * # moving-crud
 *
 * Main module of the application.
 */
angular
  .module('moving-crud', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/manifest', {
        templateUrl: 'views/manifest.html',
        controller: 'ManifestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
