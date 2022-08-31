export default function staticFiles() {
  return $.gulp.src($.path.src.static)
    // Track only new files
    .pipe($.plugins.newer($.path.build.static))
    // Move files to the dist directory
    .pipe($.gulp.dest($.path.build.static))
}