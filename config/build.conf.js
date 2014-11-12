({
  mainConfigFile: './require.conf.js',
  out: '../dist/app.js',
  exclude: [
    /*
     * https://groups.google.com/forum/#!msg/requirejs/jiaDogbA1EQ/jKrHL0gs21UJ
     * text plugin is evaluated by r.js
     * required for building but useless into build
     */
    'text'
  ],
  optimize: 'none',
  useStrict: true,
  paths: {
    'angular': 'empty:'
  }
  /*
   * DO NOT USE STUBMODULES OPTION EXCEPTED FOR APPCACHE BUILDS.
   * stubModules: ['text']
   */
})
