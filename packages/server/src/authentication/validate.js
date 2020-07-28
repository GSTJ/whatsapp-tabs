import jwt from 'jsonwebtoken'
import { User } from '../models'

const { JWT_SECRET } = process.env

export default async token => {
  if (!token) throw new Error('Missing JWT')
  const { id } = await jwt.verify(token, JWT_SECRET)
  return User.findById(id)
}
