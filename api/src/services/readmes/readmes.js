import { db } from 'src/lib/db'

export const readmes = () => {
  return db.readme.findMany()
}
