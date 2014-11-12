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

    // Sort by heaviest within room
    vm.rooms.forEach(function(room) {
        var items = room.roomContents;
        items.sort(function(item1, item2) {
            return item2.itemWeight.value - item1.itemWeight.value;
        });
    });
}
