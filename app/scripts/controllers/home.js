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
    vm.clearAllRooms = clearAllRooms;
    vm.addItem = addItem;
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

    function addRoom(roomDescription) {
        vm.rooms.unshift({
            "roomDescription" : roomDescription,
            "roomContents": [
                {
                    "itemDescription": "Item 1",
                    "itemWeight": {
                        "unit": "kg",
                        "value": 1
                    },
                    "itemCount": 1,
                    "isFragile": false
                }
            ]
        });
    }

    function removeRoom(roomIndex) {
        if (window.confirm('Are you sure you want to delete a room?')) {
            vm.rooms.splice(roomIndex, 1);
        }
    }

    function clearAllRooms() {
        if (window.confirm('Are you sure you want to delete ALL the rooms?')) {
            vm.rooms = [];
        }
    }

    function addItem(roomIndex) {
        vm.rooms[roomIndex].roomContents.unshift({
            "itemDescription": "Item 1",
            "itemWeight": {
                "unit": "kg",
                "value": 1
            },
            "itemCount": 1,
            "isFragile": false
        });
    }

    function removeItem(roomIndex, itemIndex) {
        var item = vm.rooms[roomIndex].roomContents[itemIndex];
        if (window.confirm('Are you sure you want to delete the ' + item.itemDescription + '?')) {
            vm.rooms[roomIndex].roomContents.splice(itemIndex, 1);
        }
    }
}
