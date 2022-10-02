import dotenv from 'dotenv'

import { app } from './app.js'

const PORT = process.env.PORT ?? 8000
//register dotenv to read config files
dotenv.config()

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
