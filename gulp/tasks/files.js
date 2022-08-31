export default function files() {
  return $.gulp.src($.path.src.files)
    .pipe($.gulp.dest($.path.build.files))
}