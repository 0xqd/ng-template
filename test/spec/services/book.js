'use strict';

describe('Book', function () {
  var mockResource, $httpBackend;
  beforeEach(angular.mock.module('clientApp'));

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      mockResource = $injector.get('Book');
    });
  });

  describe('getUser', function () {
    it('should get user with an id', inject(function (Book) {
      $httpBackend.expectGET('/api/book/123')
                  .respond({
                    id: 123
                  });

      var result = mockResource.get({bookId: 123});

      $httpBackend.flush();

      expect(result[0].id).toEqual(123);

      console.log(result.info);
    }));
  });
});
