import { deleteAsync } from 'del'

export default function clean() {
  return deleteAsync($.path.clean)
}