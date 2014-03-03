var specFiles = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/\/base\/src\/.*_test\.js$/.test(file)) {
      specFiles.push(file);
    }
  }
}

require(['/base/config/require.conf.js'], function() {
  'use strict';

  require.config({
    baseUrl: '/base/src',

    paths: {
      'angularMocks': '../bower_components/angular-mocks/angular-mocks'
    },

    shim: {
      'angularMocks': {
        deps: ['angular']
      }
    },

    deps: specFiles,

    callback: window.__karma__.start
  });
});
