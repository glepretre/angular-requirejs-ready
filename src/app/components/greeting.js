define([
  'app/module',
  'text!app/components/greeting/hello.html'
], function(module,
            greetingTemplate) {
  'use strict';

  module.directive('greeting', [function() {
    return {
      restrict: 'E',
      template: greetingTemplate
    }
  }]);
});
