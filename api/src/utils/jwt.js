import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '../constants.js'

export const createAccessToken = (user) => {
  const tokenExp = new Date()
  tokenExp.setHours(tokenExp.getHours() + 3)

  const payload = {
    token_type: 'access',
    user_id: user._id,
    iat: Date.now(),
    exp: tokenExp.getTime()
  }

  return jwt.sign(payload, JWT_SECRET_KEY)
}

export const createRefreshToken = (user) => {
  const tokenExp = new Date()
  tokenExp.setMonth(tokenExp.getMonth() + 1)

  const payload = {
    token_type: 'refresh',
    user_id: user._id,
    iat: Date.now(),
    exp: tokenExp.getTime()
  }

  return jwt.sign(payload, JWT_SECRET_KEY)
}

export const decodeToken = (token) => {
  return jwt.decode(token)
}
