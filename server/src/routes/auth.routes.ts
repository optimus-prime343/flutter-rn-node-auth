import { Router } from 'express'

import { URLS } from '../constants/urls.js'
import { login, profile, register } from '../controllers/auth.controller.js'
import { checkAuth } from '../middlewares/check-auth.middleware.js'
import { validateSchema } from '../middlewares/validate-schema.middleware.js'
import { loginSchema } from '../schemas/login.schema.js'
import { registerSchema } from '../schemas/register.schema.js'

const authRouter = Router()

authRouter.get(URLS.profile, checkAuth, profile)
authRouter.post(URLS.login, validateSchema(loginSchema), login)
authRouter.post(URLS.register, validateSchema(registerSchema), register)

export { authRouter }
