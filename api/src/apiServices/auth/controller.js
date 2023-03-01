import bcrypt from 'bcrypt'
import { getConnection } from '../../database.js'
import { createAccessToken, createRefreshToken, decodeToken } from '../../utils/jwt.js'

export const authController = async (req, res) => {
  const { userName, password } = req.body
  if (!userName) return res.status(400).send('username is requiered')
  if (!password) return res.status(400).send('password is requiered')
  const db = await getConnection()

  const userF = db.data.users.find((user) => user.userName == userName)
  if (!userF) {
    return res.status(400).send('incorrect password')
  }
  const isAuthUser = await bcrypt.compare(password, userF.password)

  if (isAuthUser) {
    if (userF.isActive) {
      return res.status(200).send({ access: createAccessToken(userF), refresh: createRefreshToken(userF) })
    }
    return res.status(401).send({ message: 'unauthorized user or inactive user' })
  } else {
    return res.status(400).send('incorrect password')
  }
}

export const refreshTokenController = (req, res) => {
  const { token } = req.body
  const db = getConnection()

  const payload = decodeToken(token)

  if (!token) {
    return res.status(400).send('token is requiered')
  } else {
    if (payload) {
      const { user_id } = payload
      const userF = db.data.users.find((user) => user._id == user_id)
      if (userF) {
        return res.status(200).send({ access: createAccessToken(userF), refresh: createRefreshToken(userF) })
      }
    }
    return res.status(404).send('invalid token')
  }
}
