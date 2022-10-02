import { Prisma, User } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { StatusCodes } from 'http-status-codes'

import { LoginPayload } from '../schemas/login.schema.js'
import { Controller } from '../types/controller.type.js'
import { prisma } from '../utils/prisma-client.js'
import { signJWT } from '../utils/sign-jwt.js'

export const login: Controller = async (req, res) => {
  const { email, password } = req.body as LoginPayload
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'User with this email doesn"t exist' })
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (!isPasswordCorrect) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Invalid email or password' })
  }
  const token = signJWT({ id: user.id })
  return res
    .status(StatusCodes.OK)
    .json({ message: 'Successfully logged in', data: { token } })
}
export const register: Controller = async (req, res) => {
  const { email, name, password } = req.body as Prisma.UserCreateArgs['data']
  const userWithSameEmail = await prisma.user.findUnique({
    where: { email },
  })
  if (userWithSameEmail) {
    return res
      .status(StatusCodes.CONFLICT)
      .json({ message: 'User with this email already exists' })
  }
  const hashedPassword = await bcrypt.hash(password, 12)
  const user = await prisma.user.create({
    data: { email, name, password: hashedPassword },
  })
  try {
    const token = signJWT({ id: user.id })
    return res.json({
      message: 'Successfully created a new account',
      data: { token },
    })
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message })
  }
}
export const profile: Controller = (_req, res) => {
  const user = res.locals.user as User
  return res.status(StatusCodes.OK).json({ data: user })
}
