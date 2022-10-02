import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import type { AnyZodObject } from 'zod'

export const validateSchema =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json(error)
    }
  }
