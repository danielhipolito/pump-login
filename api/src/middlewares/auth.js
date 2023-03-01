import { decodeToken } from '../utils/jwt.js'

export const tokenValidator = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(400).send({ message: 'missing authorization token' })
  } else {
    const authToken = token.replace('Bearer ', '')
    const payload = decodeToken(authToken)

    try {
      const { exp } = payload
      const currentDate = new Date().getTime()
      if (exp <= currentDate) {
        return res.status(400).send({ message: 'expired token' })
      }
      req.user = payload
      next()
    } catch (err) {
      return res.status(400).send({ message: 'invalid token' })
    }
  }
}
