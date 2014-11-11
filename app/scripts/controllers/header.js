'use strict';

/**
 * @ngdoc function
 * @name moving-crud.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the moving-crud app
 */
angular.module('moving-crud')
  .controller('HeaderCtrl', HeaderController);

HeaderController.$inject = ['$location'];

function HeaderController($location) {
    var vm = this;

    // Is viewLocation the current location?
    vm.getIsActive = function(viewLocation) {
        return viewLocation === $location.path();
    }
}
