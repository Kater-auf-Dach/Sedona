'use strict';

var gulp      = require('gulp'),
  copy        = require('gulp-copy'),
  filter      = require('gulp-filter'),
  rename      = require('gulp-rename'),
  replace     = require('gulp-replace'),
  rimraf      = require('rimraf');

var path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/'
  },
  src: {
    html: 'desktop.bundles/**/*.html',
    js: 'desktop.bundles/**/_*.js',
    styles: 'desktop.bundles/**/_*.css',
    img: 'img/**/*.*',
    fonts: 'fonts/**/*.*'
  },
  clean: './build'
};

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('copy', function () {
  gulp.src([path.src.html,path.src.styles, path.src.js])
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('build'));
});

// var flatten = require('gulp-flatten');
 
// gulp.src('bower_components/**/*.min.js')
//   .pipe(flatten())
//   .pipe(gulp.dest('build/js'));

gulp.task('replace', function(){
  gulp.src(['build/index.html'])
    .pipe(replace('_index.css', 'index.css'))
    .pipe(gulp.dest('build/index.html'));
});


//   gulp.task('images', function() {
// gulp.src('common.blocks/*/.{png,jpg,jpeg,svg}')
// .pipe(flatten())
// .pipe(gulp.dest(path.join(params.images)));
// });

gulp.task('default', [
  'clean',
  'copy',
  'replace'
]);

