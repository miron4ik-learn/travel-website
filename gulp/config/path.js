import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const srcFolder   = './src',
      buildFolder = './dist'

export default {
  build: {
    static: `${buildFolder}/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    fonts: `${buildFolder}/fonts/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    static: `${srcFolder}/static/*.*`,
    html: `${srcFolder}/html/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    css_libs: `${srcFolder}/scss/libs/libs.scss`,
    fonts: `${srcFolder}/fonts/*.ttf`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    static: `${srcFolder}/static/*.*`,
    html: `${srcFolder}/html/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    css_libs: `${srcFolder}/scss/libs/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    files: `${srcFolder}/files/**/*.*`,

    data: `${srcFolder}/data/**/*.json`,
    svg: `${srcFolder}/svg/**/*.svg`,
  },

  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
}