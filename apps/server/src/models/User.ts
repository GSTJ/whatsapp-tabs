import Mongoose, { Schema, Document } from 'mongoose'
import { userPlugin } from './plugins'
import { IUserMessage } from './UserMessage'

const { Types } = Schema

export interface IUser extends Document {
  googleId: number
  name: string
  email: string
  status?: 'online' | 'offline' | 'busy'
  conversations?: string[]
  createdAt?: string
  updatedAt?: string

  lastMessage?: IUserMessage
}

const UserSchema = new Schema(
  {
    googleId: {
      type: Number,
      required: true
    },
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
  },
  { timestamps: true }
)

UserSchema.plugin(userPlugin)

export default Mongoose.model<IUser>('users', UserSchema)
