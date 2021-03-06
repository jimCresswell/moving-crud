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
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      })
      .when('/manifest', {
        templateUrl: 'views/manifest.html',
        controller: 'ManifestCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
