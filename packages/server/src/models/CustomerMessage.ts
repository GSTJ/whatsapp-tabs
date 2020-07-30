import Mongoose, { Schema, Document } from 'mongoose'
import { CustomerMessagePlugin } from './plugins'

const { Types } = Schema

export interface ICustomerMessage extends Document {
  from: string
  to?: string
  body?: string
  media?: string
  messageSid: string
  status?: 'sending' | 'sent' | 'failed' | 'read' | 'delivered'
  contentType?: string
  createdAt?: string
  updatedAt?: string
}

const CustomerMessageSchema = new Schema(
  {
    from: {
      type: Types.ObjectId,
      required: true
    },
    to: Types.ObjectId,
    body: String,
    media: String,
    messageSid: {
      type: String,
      required: true,
      unique: true
    },
    status: {
      type: String,
      enum: ['sending', 'sent', 'failed', 'read', 'delivered'],
      default: 'sending'
    },
    contentType: {
      type: String,
      default: 'text/plain'
    }
  },
  { timestamps: true }
)

CustomerMessageSchema.plugin(CustomerMessagePlugin)

export default Mongoose.model<ICustomerMessage>(
  'customer_messages',
  CustomerMessageSchema
)
