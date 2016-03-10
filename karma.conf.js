module.exports = function(config) {
    config.set({
        // base path to resolve all patterns (eg. files, exclude...)
        basePath: '',
        
        browserNoActivityTimeout: 100000,
        browserDisconnectTimeout:5000,
        
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        
        // list of files / patterns to load in the browser
        files: [
            'public/lib/jquery/dist/jquery.js',
            'public/lib/angular/angular.js',
            'public/lib/angular-mocks/angular-mocks.js',
            'public/app/app.js',
            'public/app/VotingController.js',
            'public/app/test/*.js'
        ],
        
        // list of files to exclude
        exclude: [
        ],
        
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },
        
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],
        
        // web server port
        port: 9876,
        
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARNING || config.LOG_INFO
        logLevel: config.LOG_INFO,
        
        // enable / disable watching file and excuting tests whenever any file changes
        autoWatch: true,
        
        // start these browsers
        // available browser launchers: ../karma-launcher
        browsers: ['IE'],  //, 'Firefox', 'PhantomJS'],
        
        // Continuous Integration mode
        // if true, karma captures browsers, runs the tests and exits
        singleRun: false
        
        // 
        // plugins: [
        //     'karma-ie-launcher',
        //     'karma-jasmine'
        // ]
        
    });
};