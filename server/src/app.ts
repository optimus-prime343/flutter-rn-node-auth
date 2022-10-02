import cors from 'cors'
import Express from 'express'
import morgan from 'morgan'

import { authRouter } from './routes/auth.routes.js'

const app = Express()

//register middlewares
app.use(morgan('dev'))
app.use(Express.json())
app.use(cors())

//register routes
app.get('/', (_req, res) => res.send('Server is running'))
app.use('/api/v1/auth', authRouter)

// not found handler
app.use('*', (req, res) =>
  res
    .status(404)
    .json({ message: `${req.originalUrl} doesn't exist on this server` }),
)

export { app }
