import { StatusCodes } from 'http-status-codes'

import { Controller } from '../types/controller.type.js'
import { decodeJWT } from '../utils/decode-jwt.js'
import { prisma } from '../utils/prisma-client.js'

export const checkAuth: Controller = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization
  if (!authorizationHeader) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Unauthorized' })
  }
  const [, token] = authorizationHeader.split(' ')
  if (!token)
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Unauthorized' })

  try {
    const { id } = decodeJWT<{ id: string }>(token)
    const user = await prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true },
    })
    if (!user)
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Unauthorized' })
    res.locals.user = user
    return next()
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message })
  }
}
