exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  specs: [
    '../e2e/**/*.js'
  ],

  multiCapabilities: [
    {'browserName': 'firefox'},
    {'browserName': 'chrome'}
  ],

  baseUrl: 'http://localhost:8000',

  jasmineNodeOpts: {
    isVerbose: true
  }
};
