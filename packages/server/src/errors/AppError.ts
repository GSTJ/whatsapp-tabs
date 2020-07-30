import status from 'http-status'

class AppError {
  public readonly message: string
  public readonly statusCode: number

  constructor(message: string, statusCode = status.BAD_REQUEST) {
    this.message = message
    this.statusCode = statusCode
  }
}

export default AppError
