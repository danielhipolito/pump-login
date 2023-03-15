import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import getInitialData from './utils/dummyData.js'

let db

const __dirname = dirname(fileURLToPath(import.meta.url))

export async function createConnection () {
  const file = join(__dirname, '../db.json')
  const adapter = new JSONFile(file)
  const initalData = getInitialData()
  db = new Low(adapter)
  await db.read()

  db.data ||= {
    users: initalData
  }
  await db.write()
}

createConnection()

export const getConnection = () => db
