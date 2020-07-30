import Mongoose, { Schema, Document } from 'mongoose'
import { userMessagePlugin } from './plugins'

const { Types } = Schema

export interface IUserMessage extends Document {
  from: string
  to: string
  body: string
  media: string
  status: 'sending' | 'sent' | 'failed' | 'read' | 'delivered'
  contentType: string
  conversations: string[]
  createdAt?: string
  updatedAt?: string
}

const UserMessageSchema = new Schema(
  {
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
      enum: ['sending', 'sent', 'failed', 'read', 'delivered'],
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
  },
  { timestamps: true }
)

UserMessageSchema.plugin(userMessagePlugin)

export default Mongoose.model<IUserMessage>('user_messages', UserMessageSchema)
