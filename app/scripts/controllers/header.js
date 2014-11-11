'use strict';

/**
 * @ngdoc function
 * @name movingCrudApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the movingCrudApp
 */
angular.module('movingCrudApp')
  .controller('HeaderCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
