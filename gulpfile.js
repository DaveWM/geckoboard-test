var gulp = require('gulp');
var fs = require("fs");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var livereload = require('gulp-livereload');
var mocha = require('gulp-mocha');
var babel = require('babel-core/register');

gulp.task('js', () => {
  return browserify("./src/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
})

gulp.task('test', () => {
  return gulp.src('./src/**/*.test.js*')
    .pipe(mocha({
      compilers: {
        js: babel,
        jsx: babel
      }
    }));
})

gulp.task('watch', ['js'], () => {
  livereload.listen();
  gulp.watch('./src/**/*.js*', ['js']);
})

gulp.task('watch-test', () => {
  gulp.watch('./src/**/*.js*', ['test']);
})
