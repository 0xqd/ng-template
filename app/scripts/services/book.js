'use strict';

angular.module('clientApp')
  .factory('Book', ['$resource', function ($resource) {
    return $resource('/api/book/:bookId', {bookId: '@id'});
  }]);
