import { Router } from 'express'
import multiparty from 'connect-multiparty'
import { getProfile, updateProfile } from './controller.js'
import { tokenValidator } from '../../middlewares/auth.js'

const upload_md = multiparty({ uploadDir: './src/uploads/avatar/' })
const router = Router()

router.get('/profile', [tokenValidator], getProfile)
router.put('/profile', [tokenValidator, upload_md], updateProfile)

export default router
