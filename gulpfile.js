'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');

var env = process.env.NODE_ENV || 'development';
/*
var defaultTasks = ['clean', 'jshint', 'csslint','serve','watch']; // initialize with development settings
if (env === 'production') { var defaultTasks = ['clean', 'cssmin', 'uglify', 'serve', 'watch'];}
if (env === 'test')       { var defaultTasks = ['env:test', 'karma:unit', 'mochaTest'];}
*/
// read gulp directory contents for the tasks...
require('require-dir')('./gulp');
console.log('Invoking gulp -',env);
gulp.task('default', ['clean'], function (defaultTasks) {
  // run with paramater
  gulp.start(env);
});

// 문서 작업
gulp.task('docs', shell.task([
  'node_modules/jsdoc/jsdoc.js '+
    '-c node_modules/angular-jsdoc/conf.json '+   // config file
    '-t node_modules/angular-jsdoc/template '+    // template file
    '-d build/docs '+                             // output directory
    '-r packages/custom/theme/public/controllers'                              // source code directory
]));
