'use strict';

/**
 * @ngdoc function
 * @name moving-crud.controller:ManifestCtrl
 * @description
 * # ManifestCtrl
 * Controller of the moving-crud
 */
angular.module('moving-crud')
  .controller('ManifestCtrl', ManifestController);

ManifestController.$inject = ['localStorageService'];

function ManifestController(localStorageService) {
    var vm = this;

    vm.rooms = localStorageService.get('rooms') || [];
}
