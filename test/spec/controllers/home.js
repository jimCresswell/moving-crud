'use strict';

describe('Controller: HomeCtrl', function () {

  var scope, localStorageService;

  // load the controller's module
  beforeEach(module('moving-crud'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _localStorageService_) {
    scope = $rootScope.$new();
    localStorageService = _localStorageService_;
    $controller('HomeCtrl as vm', {
      $scope: scope,
      $window: {
        confirm: function() {return true;}
      },
      localStorageService: _localStorageService_
    });
  }));

  // Reset persisted state.
  beforeEach(function() {
    localStorageService.clearAll();
    localStorageService.set('rooms', []);
  });

  it('should have no rooms to start with', function () {
    expect(scope.vm.rooms.length).toBe(0);
  });

  it('should add rooms to the list', function () {
    var vm = scope.vm;
    vm.newRoom = {'roomDescription': 'A new room'};
    vm.processRoom();
    expect(scope.vm.rooms.length).toBe(1);
  });

  it('should add and remove rooms to the list', function () {
    var vm = scope.vm;
    vm.newRoom = {'roomDescription': 'A new room'};
    vm.processRoom();
    vm.removeRoom(0);
    expect(scope.vm.rooms.length).toBe(0);
  });
});
