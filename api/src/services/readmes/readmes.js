import { db } from 'src/lib/db'

export const readmes = () => {
  return db.readme.findMany()
}

export const Readme = {
  User: (_obj, { root }) =>
    db.readme.findUnique({ where: { id: root.id } }).User(),
}
