'use strict';

describe('Controller: HomeCtrl', function () {

  var scope;

  // load the controller's module
  beforeEach(module('moving-crud'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _localStorageService_) {
    scope = $rootScope.$new();
    $controller('HomeCtrl as vm', {
      $scope: scope,
      localStorageService: _localStorageService_
    });
  }));

  it('should have no items to start with', function () {
    expect(scope.vm.items.length).toBe(0);
  });

  it('should add items to the list', function () {
    var vm = scope.vm;
    vm.newItem = 'A new item';
    vm.processItem();
    expect(scope.vm.items.length).toBe(1);
  });

  it('should add and remove items to the list', function () {
    var vm = scope.vm;
    vm.item = 'A new item';
    vm.processItem();
    vm.removeItem(0);
    expect(scope.vm.items.length).toBe(0);
  });
});
