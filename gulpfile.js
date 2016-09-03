'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var dir_sass = 'scss/**/*.scss';

gulp.task('styles', function() {
  gulp.src(dir_sass)
    .pipe(sass())
		.pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('default', function() {
  gulp.watch(dir_sass, ['styles']);
});
