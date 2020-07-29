import { Schema } from 'mongoose'

const { Types } = Schema
const USER_MESSAGE = {
  from: {
    type: Types.ObjectId,
    required: true,
    ref: 'users'
  },
  to: {
    type: Types.ObjectId,
    required: true,
    ref: 'users'
  },
  body: String,
  media: String,
  status: {
    type: String,
    enum: ['sending', 'failed', 'sent'],
    default: 'sending'
  },
  contentType: {
    type: String,
    default: 'text/plain'
  },
  conversations: {
    type: [{ type: Types.ObjectId, ref: 'clients' }],
    default: []
  }
}

export default USER_MESSAGE
