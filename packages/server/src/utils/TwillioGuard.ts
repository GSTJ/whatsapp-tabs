import AppError from '../errors/AppError'

export default (req, _res, next) => {
  const { AccountSid } = req.body

  if (AccountSid !== process.env.ACCOUNT_SID) {
    throw new AppError('Forbidden', 403)
  }

  next()
}
