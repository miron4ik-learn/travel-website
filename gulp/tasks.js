import clean from './tasks/clean.js'
import server from './tasks/server.js'

import staticFiles from './tasks/static.js'
import html from './tasks/html.js'
import scss from './tasks/scss.js'
import js from './tasks/js.js'
import images from './tasks/images.js'
import files from './tasks/files.js'

import { ttf2woff } from './tasks/fonts.js'
import { fontsStyle } from './tasks/fonts.js'

import deploy from './tasks/deploy.js'

export default {
  clean,
  server,

  staticFiles,
  html,
  scss,
  js,
  images,
  files,

  ttf2woff,
  fontsStyle,

  deploy
}