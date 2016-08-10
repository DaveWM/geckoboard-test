var gulp = require('gulp');
var fs = require("fs");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var livereload = require('gulp-livereload');

gulp.task('js', () => {
  return browserify("./src/app.js")
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
})

gulp.task('watch', ['js'], () => {
  livereload.listen();
  gulp.watch('./src/**/*.js*', ['js']);
})
