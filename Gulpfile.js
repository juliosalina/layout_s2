// Include gulp
var gulp = require('gulp');
var gutil = require('gulp-util');
// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var plugins = require('gulp-load-plugins')();
var cleanCSS = require('gulp-clean-css');
var rimraf = require('rimraf');

/**
 * removes css- and js-dist folder.
 */
gulp.task('clean', function() {
    rimraf.sync('new/assets/css');
});

gulp.task('message', function() {
    console.log('------------------------------------------------------------------------');
    console.log('Dr. Consulta - Sistema S2 - Novo Layout - [--Starting Automator tasks--]');
    console.log('------------------------------------------------------------------------');
});

// Compile Our Less
gulp.task('sass', function() {
  return gulp.src(['new/assets/sass/style.scss'])
    .pipe(plugins.concat('style.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('new/assets/css'));
});

gulp.task('sass-icons', function() {
  return gulp.src(['new/assets/sass/icons.scss'])
    .pipe(plugins.concat('icons.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('new/assets/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['new/assets/sass/*.scss'], ['sass']);
});

// Default Task
gulp.task('default', ['message', 'clean', 'sass', 'sass-icons', 'watch']);