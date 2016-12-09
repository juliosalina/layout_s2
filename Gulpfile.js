// Include gulp
var gulp = require('gulp');
var gutil = require('gulp-util');
// Include Our Plugins
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var plugins = require('gulp-load-plugins')();
var cleanCSS = require('gulp-clean-css');
var rimraf = require('rimraf');


gulp.task('message', function() {
    console.log('------------------------------------------------------------------------');
    console.log('Dr. Consulta - Sistema S2 - Novo Layout - [--Starting Automator tasks--]');
    console.log('------------------------------------------------------------------------');
});

/**
 * removes css- and js-dist folder.
 */
gulp.task('clean', function() {
    rimraf.sync('assets/css'); 
});

// Compile Our Less
gulp.task('less1', function() {
  return gulp.src(['assets/less/style.less'])
    .pipe(plugins.concat('style.css'))
    .pipe(less().on('error', gutil.log))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('less2', function() {
  return gulp.src(['assets/less/icons.less'])
    .pipe(plugins.concat('icons.css'))
    .pipe(less().on('error', gutil.log))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('less3', function() {
  return gulp.src(['assets/less/bootstrap.min.css'])
    .pipe(gulp.dest('assets/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['assets/less/*.less'], ['less1', 'less2', 'less3']);
});

// Default Task
gulp.task('default', ['message', 'clean', 'less1', 'less2', 'less3', 'watch']);