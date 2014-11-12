require(['/config/require.conf.js'], function() {
  'use strict';
  /*
   * Angular Bootstrap
   * Could not use ng-app with requirejs since
   * scripts are asynchronously loaded
   */
  require(['angular', '../e2e/e2e'], function(angular) {
    angular.element(document).ready(function() {
      angular.bootstrap(document, ['e2e']);
    });
  });
});
