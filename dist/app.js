define('app/module',[
  'angular'
], function(angular) {
  'use strict';

  return angular.module('app', []);
});


define('text!app/components/greeting/hello.html',[],function () { return '<h1>Hello World!</h1>\n';});

define('app/components/greeting',[
  'app/module',
  'text!app/components/greeting/hello.html'
], function(module,
            greetingTemplate) {
  'use strict';

  module.directive('greeting', [function() {
    return {
      restrict: 'E',
      template: greetingTemplate
    };
  }]);
});

// Include here files without reverse dependencies
define('app',[
  'app/components/greeting'
], function() {
  'use strict';
});

