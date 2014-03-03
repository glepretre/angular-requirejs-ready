({
  mainConfigFile: './require.conf.js',
  dir: '../dist',
  modules: [
    {
      name: 'app',
      exclude: [
        //'text'
      ]
    }
  ],
  optimize: 'none',
  useStrict: true,
  paths: {
    'angular': 'empty:'
  }
})
