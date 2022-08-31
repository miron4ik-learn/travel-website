import fs from 'fs'
import path from 'path'

import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

// Convert ttf to woff & woff2
const ttf2woff = () => {
  return $.gulp.src($.path.src.fonts)
    // Move .ttf files to the dist directory
    .pipe($.gulp.dest($.path.build.fonts))
    // Convert ttf to woff
    .pipe(
      fonter({
        formats: [ 'woff' ],
      })
    )
    // Move .woff files to the dist directory
    .pipe($.gulp.dest($.path.build.fonts))

    .pipe($.gulp.src($.path.src.fonts))
    // Convert ttf to woff2
    .pipe(ttf2woff2())
    // Move .woff2 files to the dist directory
    .pipe($.gulp.dest($.path.build.fonts))
}

// Create fonts.scss file
const fontsStyle = () => {
  // Output file
  const fontsFile = `${path.dirname($.path.src.scss)}/fonts.scss`

  // Read the fonts dir
  fs.readdir($.path.build.fonts, (error, fontsFiles) => {
    if(fontsFiles) {
      if(!fs.existsSync(fontsFile)) {
        // Create the fonts.scss file if it does not exist
        fs.writeFile(fontsFile, '// Fonts\r\n\r\n', cb)

        let newFileOnly
        for(let i = 0; i < fontsFiles.length; i++) {
          const fontFileName = fontsFiles[i].split('.')[0]

          if(newFileOnly !== fontFileName) {
            let [ fontName, fontWeight ] = fontFileName.split('-', 2)

            fontName = fontName || fontFileName
            fontWeight = fontWeight || fontFileName

            fontWeight = {
              thin: 100,
              extralight: 200,
              light: 300,
              medium: 500,
              semibold: 600,
              bold: 700,
              extrabold: 800,
              heavy: 800,
              black: 900,
            }[fontWeight.toLowerCase()] || 400

            fs.appendFile(fontsFile, `
              @font-face {\r\n
                font-family: "${fontName}";
                font-display: swap;
                src: url("../fonts/${fontFileName}.woff2") format("woff2"),
                  url("../fonts/${fontFileName}.woff") format("woff"),
                  url("../fonts/${fontFileName}.ttf") format("truetype");
                font-weight: ${fontWeight};
                font-style: normal;
              }
            `.trim().replace(/\s/g, '') + '\r\n', cb)

            newFileOnly = fontFileName
          }
        }
      } else {
        console.log('Файл fonts.scss уже существует. Для обновления файла нужно его удалить!')
      }
    }
  })

  return $.gulp.src($.path.srcFolder)
  function cb() {}
}

export {
  ttf2woff,
  fontsStyle,
}