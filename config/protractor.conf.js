exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  specs: [
    '../e2e/**/*.js'
  ],

  multiCapabilities: [
    {'browserName': 'firefox'},
    {'browserName': 'chrome'},
    {'browserName': 'phantomjs'}
  ],

  baseUrl: 'http://localhost:8000',

  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    includeStackTrace: true
  }
};
