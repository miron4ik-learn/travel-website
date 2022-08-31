import browserSync from 'browser-sync'
import newer from 'gulp-newer'
import replace from 'gulp-replace'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import gulpIf from 'gulp-if'

export default {
  browserSync,
  newer,
  replace,
  plumber,
  notify,
  if: gulpIf,
}