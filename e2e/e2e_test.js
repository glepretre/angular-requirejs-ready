/* global element, by */

describe('app', function() {
  'use strict';

  describe('startup', function() {
    it('should display "Hello World!"', function() {
      var title = element(by.tagName('h1'));

      expect(title.getText()).toEqual('Hello World!');
    });
  });
});
