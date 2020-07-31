import { OAuth2Client } from 'google-auth-library'
import { User } from '../models'
import AppError from '../errors/AppError'

const { GOOGLE_ID } = process.env
const GoogleClient = new OAuth2Client(GOOGLE_ID)

class AuthenticateUserService {
  public async execute({ tokenId }: { tokenId: string }) {
    if (!tokenId) throw new AppError("Property 'tokenId' was not provided")

    const googleUser = await GoogleClient.verifyIdToken({
      idToken: tokenId,
      audience: GOOGLE_ID
    })

    const { name, email } = googleUser.getPayload()

    const user = await User.findOne({ email })

    if (user) {
      // Updating information from Google.
      user.name = name
      await user.save()
      return user
    }

    console.log({ name, email, googleId: googleUser.getUserId() })

    return User.create({ name, email, googleId: googleUser.getUserId() })
  }
}

export default AuthenticateUserService
