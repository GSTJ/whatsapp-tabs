import status from 'http-status'
import AppError from './AppError'
import { Request, Response } from 'express'

export default (err, _req: Request, res: Response, _next: Function) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message || status[err.statusCode]
    })
  }

  return res.status(status.INTERNAL_SERVER_ERROR).json({
    status: 'error',
    message: status[status.INTERNAL_SERVER_ERROR]
  })
}
