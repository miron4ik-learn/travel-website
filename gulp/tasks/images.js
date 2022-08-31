export default function images() {
  return $.gulp.src($.path.src.images)
    // Track only new files
    .pipe($.plugins.newer($.path.build.images))
    // Move files to the dist directory
    .pipe($.gulp.dest($.path.build.images))
    // Update the browser
    .pipe($.plugins.browserSync.stream())
}