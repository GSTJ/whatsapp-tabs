import jwt from 'jsonwebtoken'
import { User } from '../models'
import AppError from '../errors/AppError'

const { JWT_SECRET } = process.env

export default (token: string) => {
  if (!token) throw new AppError('Missing JWT')
  const { id } = jwt.verify(token, JWT_SECRET) as { id: number }
  return User.findById(id)
}
