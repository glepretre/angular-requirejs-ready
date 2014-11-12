define([
  'app/components/greeting'
], function() {
  'use strict';

  describe('greeting', function() {
    var $scope,
        $element;

    beforeEach(module('app'));

    beforeEach(inject(function($compile, $rootScope) {
      $scope = $rootScope.$new();
      $element = $compile('<greeting></greeting>')($scope);
      $scope.$digest();
    }));

    it('should display "Hello World!"', function() {
      expect($element.find('h1').text()).toEqual('Hello World!');
    });
  });
});
