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

HomeController.$inject = ['$scope', 'localStorageService'];

function HomeController($scope, localStorageService) {
    var vm = this;

    // Load items from local storage or load the example data.
    vm.items = localStorageService.get('items') || [];

    vm.processItem = processItem;
    vm.removeItem = removeItem;

    // Sync local storage on model update.
    // TODO: move to a factory so $scope isn't needed in this controller.
    $scope.$watch('vm.items', function () {
      localStorageService.set('items', vm.items);
    }, true);


    /*
     * Function definitions
     */

    function processItem() {

        // Reject falsy item descriptions including undefined and empty string.
        if (!vm.newItem) {
            return;
        }

        // Verify intentional duplicate items
        if (vm.items.indexOf(vm.newItem) !== -1) {
            if (!window.confirm('Are you sure you want to add the same item again?')) {
                return;
            }
        }

        addItem(vm.newItem);
        vm.newItem = '';
    }

    function addItem(item) {
        vm.items.push(item);
    }

    function removeItem(index) {
        vm.items.splice(index, 1);
    }
}
