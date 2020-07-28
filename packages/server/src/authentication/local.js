import bcrypt from 'bcrypt'
import { User } from '../models'

const wrongNameOrPassword = new Error('Nome ou senha incorretos')

export default async (username, password) => {
  if (!username || !password) throw new Error('Preencha o nome/senha')

  const user = await User.findOne({ username })
  if (!user) throw wrongNameOrPassword

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw wrongNameOrPassword

  return user
}
