'use strict';

describe('Controller: HeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('moving-crud'));

  var HeaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeaderCtrl = $controller('HeaderCtrl', {
      $scope: scope
    });
  }));

  it('should be a really good test', function () {
    pending();
  });
});
