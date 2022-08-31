import webpack from 'webpack-stream'

export default function js() {
  const webpackConfig = {
    mode: $.isBuild ? 'production' : 'development',
    output: {
      filename: 'app.min.js',
    },
    devtool: $.isDev ? 'source-map' : false,
    module: {
      rules: [{
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ],
          },
        },
      }]
    },
  }

  return $.gulp.src($.path.src.js)
    // Error message output
    .pipe(
      $.plugins.plumber(
        $.plugins.notify.onError({
          title: 'JS',
          message: 'Error <%= error.message %>'
        })
      )
    )
    // Run webpack as a stream to conveniently integrate with gulp
    .pipe(
      webpack(webpackConfig)
    )
    // Move files to the dist directory
    .pipe($.gulp.dest($.path.build.js))
    // Update the browser
    .pipe($.plugins.browserSync.stream())
}