'use strict';

describe('Controller: TheAwesomeController', function () {
  // load the controller's module
  beforeEach(module('clientApp'));

  var TheAwesomeController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheAwesomeController = $controller('TheAwesomeController', {
      $scope: scope
    });
  }));
});
