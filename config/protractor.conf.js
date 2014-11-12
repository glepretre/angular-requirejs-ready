exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  specs: [
    '../e2e/**/*_test.js'
  ],

  multiCapabilities: [
    {'browserName': 'chrome'},
    {'browserName': 'firefox'}
  ],

  baseUrl: 'http://localhost:8000',

  onPrepare: function() {
    browser.driver.manage().window().maximize();
    browser.get('e2e/index.html');
  },

  jasmineNodeOpts: {
    isVerbose: true
  }
};
