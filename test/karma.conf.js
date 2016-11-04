// Karma configuration
// Generated on 2016-09-02

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'app/components/bower_components/jquery/dist/jquery.js',
      'app/components/bower_components/angular/angular.js',
      'app/components/bower_components/bootstrap/dist/js/bootstrap.js',
      'app/components/bower_components/angular-animate/angular-animate.js',
      'app/components/bower_components/angular-cookies/angular-cookies.js',
      'app/components/bower_components/angular-resource/angular-resource.js',
      'app/components/bower_components/angular-route/angular-route.js',
      'app/components/bower_components/angular-sanitize/angular-sanitize.js',
      'app/components/bower_components/angular-touch/angular-touch.js',
      'app/components/bower_components/lightslider/dist/js/lightslider.min.js',
      'app/components/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/components/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/components/bower_components/jquery-migrate/jquery-migrate.js',
      'app/components/bower_components/angular-translate/angular-translate.js',
      'app/components/bower_components/angular-translate-loader-url/angular-translate-loader-url.js',
      'app/components/bower_components/angular-translate-loader-partial/angular-translate-loader-partial.js',
      'app/components/bower_components/bootstrap-carousel-swipe/carousel-swipe.js',
      'app/components/bower_components/angular-file-upload/dist/angular-file-upload.min.js',
      'app/components/bower_components/leaflet/leaflet.js',
      'app/components/bower_components/angular-leaflet-directive/dist/angular-leaflet-directive.js',
      'app/components/bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
