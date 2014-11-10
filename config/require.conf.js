require.config({
  baseUrl: '../src',

  paths: {
    'angular': '../bower_components/angular/angular',
    'text': '../bower_components/requirejs-text/text'
  },

  shim: {
    'angular': {
      exports: 'angular'
    }
  }
});
