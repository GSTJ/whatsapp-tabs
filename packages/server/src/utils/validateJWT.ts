import jwt from 'jsonwebtoken'
import { User } from '../models'
import { AuthenticationError } from 'apollo-server'

const { JWT_SECRET } = process.env

export default (token: string) => {
  try {
    const { id } = jwt.verify(token, JWT_SECRET) as { id: number }
    return User.findById(id)
  } catch (err) {
    throw new AuthenticationError('You must be logged in to do this')
  }
}
