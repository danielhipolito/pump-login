import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

let db

const __dirname = dirname(fileURLToPath(import.meta.url))

export async function createConnection () {
  const file = join(__dirname, '../db.json')
  const adapter = new JSONFile(file)
  db = new Low(adapter)

  await db.read()

  db.data ||= {
    users: [{
      _id: '5410953eb0e0c0ae25608277',
      guid: 'eab0324c-75ef-49a1-9c49-be2d68f50b96',
      isActive: true,
      balance: '$3,585.69',
      picture: 'avatar/CVWADXZPqcyNm8Cv8_BhriDJ.png',
      age: 30,
      eyeColor: 'blue',
      name: {
        first: 'Henderson',
        last: 'Briggs'
      },
      company: 'GEEKNET',
      email: 'henderson.briggs@geeknet.net',
      userName: 'zozimo',
      password: '$2b$10$.Pf8zW8v2VjlTX9.2DXm/.hYtPsSQqUxZuU4t2XAoJrlqTaVaIq76',
      phone: '+1 (936) 451-3590',
      address: '121 National Drive, Cotopaxi, Michigan, 8240'
    }]
  }
  await db.write()
}

createConnection()

export const getConnection = () => db
