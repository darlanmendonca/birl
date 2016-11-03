import gulp from 'gulp';
import eslint from 'gulp-eslint';
import gutil from 'gulp-util';
import {lint} from './config.js';

gulp.task('lint', lintTask);

function lintTask() {
  return gulp
    .src(lint)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', beep);
}

function beep() {
  gutil.beep();
}
