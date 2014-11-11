'use strict';

/**
 * @ngdoc function
 * @name moving-crud.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the moving-crud
 */
angular.module('moving-crud')
  .controller('HomeCtrl', HomeController);

HomeController.$inject = ['$scope', '$http', 'localStorageService'];

function HomeController($scope, $http, localStorageService) {
    var vm = this;

    // Public methods.
    vm.processRoom = processRoom;
    vm.removeRoom = removeRoom;
    vm.processItem = processItem;
    vm.removeItem = removeItem;

    // Load rooms from local storage or load the example data.
    // TODO: create a data service to remove this logic.
    vm.rooms = localStorageService.get('rooms') || [];
    if (vm.rooms.length === 0) {
        $http.get('data/example-manifest.json')
        .success(function(data) {
            vm.rooms = data;
        })
        .error(function(data, status) {
            console.error(status);
        });
    }


    // Sync local storage on model update.
    // TODO: move to a factory so $scope isn't needed in this controller.
    $scope.$watch('vm.rooms', function () {
      localStorageService.set('rooms', vm.rooms);
    }, true);


    /*
     * Function definitions
     */

    function processRoom() {

        // Reject falsy item descriptions including undefined and empty string.
        if (!vm.newRoom) {
            return;
        }

        addRoom(vm.newRoom);
        vm.newRoom = '';
    }

    function addRoom(room) {
        vm.rooms.unshift(room);
    }

    function removeRoom(index) {
        vm.rooms.splice(index, 1);
    }

    function processItem() {}
    function removeItem() {}
}
