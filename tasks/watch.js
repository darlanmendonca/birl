import gulp from 'gulp';
import {lint} from './config.js';

gulp.task('watch', watchTask);

function watchTask() {
  gulp.watch(lint, ['lint']);
}
