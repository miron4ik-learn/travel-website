import dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

import tildeImporter from 'node-sass-tilde-importer'

import rename from 'gulp-rename'
import cssBeautify from 'gulp-cssbeautify'

import cleanCss from 'gulp-clean-css'
import autoprefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'

import postcss from 'gulp-postcss'
import postcssShort from 'postcss-short'

// PostCSS plugins
const processors = [
  postcssShort(),
]

export default function scss() {
  const replace_regexp = new RegExp(Object.keys($.replace_alias).join('|'), 'g')

  return $.gulp.src([ $.path.src.scss, $.path.src.css_libs ])
    // Error message output
    .pipe(
      $.plugins.plumber(
        $.plugins.notify.onError({
          title: 'SCSS',
          message: 'Error <%= error.message %>'
        })
      )
    )
    // SASS preprocessor
    .pipe(
      sass({
        outputStyle: 'expanded',
        importer: tildeImporter,
      })
    )
    // PostCSS preprocessor
    .pipe(
      postcss(processors)
    )
    // Replace the alias in relative paths
    .pipe($.plugins.replace(replace_regexp, match => `../${$.replace_alias[match]}`))
    // Group CSS media queries
    .pipe(
      $.plugins.if(
        $.isBuild,
        groupCssMediaQueries()
      )
    )
    // Add prefix CSS
    .pipe(
      $.plugins.if(
        $.isBuild,
        autoprefixer({
          grid: true,
          overrideBrowserslist: [ 'last 3 versions' ],
          cascade: true,
        })
      )
    )
    // Beautify CSS file
    .pipe(
      $.plugins.if(
        $.isBuild,
        cssBeautify({
          indent: '  ',
          autosemicolon: true,
        })
      )
    )
    // Move file to the dist directory
    .pipe($.gulp.dest($.path.build.css))
    // Compress CSS
    .pipe(cleanCss())
    // Rename to .min.css
    .pipe(
      rename({
        extname: '.min.css',
      })
    )
    // Move compress file to the dist directory
    .pipe($.gulp.dest($.path.build.css))
    // Update the browser
    .pipe($.plugins.browserSync.stream())
}