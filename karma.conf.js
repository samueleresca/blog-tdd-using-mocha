module.exports = function(config) {
  config.set({
    // base path
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],
    // PORT NUMBER
    port: 9877,
    colors: true,
    autoWatch: true,
    // CI: if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // LOGGING LEVEL: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO
  });
};
