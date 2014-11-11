'use strict';

/**
 * @ngdoc function
 * @name moving-crud.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the moving-crud app
 */
angular.module('moving-crud')
  .controller('HeaderCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
