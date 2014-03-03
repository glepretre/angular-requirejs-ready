describe('app', function() {
  'use strict';

  beforeEach(function() {
    browser.driver.manage().window().maximize();
    browser.get('http://localhost:8000/proto/index.html');
  });

  describe('startup', function() {
    it('should display "Hello World!"', function() {
      var title = element(by.tagName('h1'));

      expect(title.getText()).toEqual('Hello World!');
    });
  });

});
