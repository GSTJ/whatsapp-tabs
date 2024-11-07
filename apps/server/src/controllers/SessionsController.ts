import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import AuthenticateUserService from '../services/AuthenticateUserService'

class SessionsController {
  async create(req: Request, res: Response) {
    const { tokenId } = req.body

    const authenticateUser = new AuthenticateUserService()

    const user = await authenticateUser.execute({ tokenId })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    })

    res.send({ token })
  }
}

export default new SessionsController()
