module.exports = function(config) {
  config.set({
    basePath: '..',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      // Must be before 'src/**/*.js' to be included
      { pattern: 'src/test-main.js' },
      { pattern: 'config/require.conf.js', included: false },
      { pattern: 'bower_components/**/*.js', included: false },
      { pattern: 'src/**/*.js', included: false },
      { pattern: 'src/**/*.html', included: false }
    ],
    exclude: [],
    preprocessors: {
      /*
       * Do not pre-process html files by default
       * https://github.com/karma-runner/karma/issues/740
       */
      '**/*.html': []
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,

    /*
     * level of logging
     * possible values:
     * - config.LOG_DISABLE
     * - config.LOG_WARN
     * - config.LOG_INFO
     * - config.LOG_DEBUG
     * - config.LOG_ERROR
     */
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'Chrome',
      'Firefox',
      'PhantomJS'
    ],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 10000,

    /*
     * Continuous Integration mode
     * if true, it capture browsers, run tests and exit
     */
    singleRun: false
  });
};
