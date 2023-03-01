import { Router } from 'express'
import { authController, refreshTokenController } from './controller.js'

const router = Router()

router.post('/login', authController)
router.post('/refresh_access_token', refreshTokenController)

export default router
