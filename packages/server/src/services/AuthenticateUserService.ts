import { OAuth2Client } from 'google-auth-library'
import getImage from '../utils/getImage'
import { User } from '../models'
import AppError from '../errors/AppError'

const { GOOGLE_ID } = process.env
const GoogleClient = new OAuth2Client(GOOGLE_ID)

class AuthenticateUserService {
  public async execute({ tokenId }: { tokenId: string }) {
    if (!tokenId) throw new AppError("Property 'tokenId' was not provided")

    console.log(tokenId)

    const googleUser = await GoogleClient.verifyIdToken({
      idToken: tokenId,
      audience: GOOGLE_ID
    })

    const { name, email, picture } = googleUser.getPayload()

    const user = await User.findOne({ email })

    if (user) {
      // Updating information from Google.
      Object.assign(user, { name, picture: await getImage(picture) })
      await user.save()
      return user
    }

    return User.create({
      name,
      email,
      picture: await getImage(picture)
    })
  }
}

export default AuthenticateUserService
