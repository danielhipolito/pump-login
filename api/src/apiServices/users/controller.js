import fs from 'fs'
import path from 'path'
import { getConnection } from '../../database.js'
import { getFilePath } from '../../utils/image.js'

export const getProfile = async (req, res) => {
  const { user_id } = req.user
  const db = await getConnection()

  const userFound = db.data.users.find((user) => user._id == user_id)

  if (userFound) {
    return res.status(200).send({ ...userFound })
  }
  return res.status(404).send({ message: 'not found user' })
}

export const updateProfile = async (req, res) => {
  const { user_id } = req.user

  const db = await getConnection()

  const userFound = db.data.users.find((user) => user._id == user_id)

  if (userFound) {
    const basePath = './src/uploads/'
    const { age, eyeColor, name, email, phone, address } = req.body
    let picture = userFound.picture
    if (req.files) {
      picture = req.files.picture
      if (userFound.picture) {
        await fs.rename(`${basePath}${userFound.picture}`, `${basePath}${getFilePath(picture)}`, (err) => console.log('err'))
      }
    }

    if (age) userFound.age = age
    if (eyeColor) userFound.eyeColor = eyeColor
    if (name) {
      if (name.first) {
        userFound.name.first = name.first
      }
      if (name.last) {
        userFound.name.last = name.last
      }
    }
    if (email) userFound.email = email
    if (phone) userFound.phone = phone
    if (address) userFound.address = address
    if (picture && picture.path) userFound.picture = getFilePath(picture)
    else { console.log(picture) }

    db.data.users.map((user) => user._id === user_id ? userFound : user)
    await db.write()

    return res.status(200).send({ ...userFound })
  }
  return res.status(404).send({ message: 'not found user' })
}
