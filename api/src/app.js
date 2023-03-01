import express from 'express'
import cors from 'cors'
// import bodeyParser from 'body-parser'
import userRoutes from './apiServices/users/routes.js'
import authRoutes from './apiServices/auth/routes.js'
// import {tokenValidator} from './middlewares/auth.js'
import { API_VERSION } from './constants.js'

const app = express()

// app.use(bodeyParser.json());
app.use(cors())
app.use(express.json())
app.use(`/api/${API_VERSION}/`, authRoutes)
app.use(`/api/${API_VERSION}/`, userRoutes)

app.use(express.static('src/uploads'))

app.get('*', (req, res) => {
  res.status(404).send('The requested resource was not found on this server.')
})

export default app
