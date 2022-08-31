import path from 'path'
import ghpages from 'gh-pages'

export default function deploy() {
  return ghpages.publish(
    path.basename($.path.buildFolder),
    $.ghpages,
  )
}