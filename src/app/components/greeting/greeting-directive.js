define(['app/module'], function(module) {
  'use strict';

  module.directive('greeting', [function() {
    return {
      restrict: 'E',
      template: '<h1>Hello World!</h1>'
    }
  }]);

});
