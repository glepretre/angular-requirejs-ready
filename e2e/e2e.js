define([
  'angular',
  'app'
], function(angular) {
  'use strict';

  /*
   * Create mock e2e module depending on 'app'
   * to mock a shell environment for testing purpose
   */
  angular.module('e2e', ['app']);
});
