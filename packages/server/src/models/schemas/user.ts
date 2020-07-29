import { Schema } from 'mongoose'

const { Types } = Schema
const USER = {
  picture: String,
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['online', 'offline', 'busy'],
    default: 'offline'
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  conversations: {
    type: [{ type: Types.ObjectId, ref: 'clients' }],
    default: []
  }
}
export default USER
