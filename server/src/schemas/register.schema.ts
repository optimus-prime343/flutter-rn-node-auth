import { z } from 'zod'

export const registerSchema = z.object({
  body: z.object({
    email: z.string().email(),
    name: z.string().min(3).max(20),
    password: z.string().min(6).max(20),
  }),
})
