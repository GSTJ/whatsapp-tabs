import Mongoose, { Schema, Document } from 'mongoose'
import { clientPlugin } from './plugins'
import { ICustomerMessage } from './CustomerMessage'
export interface ICustomer extends Document {
  number: string
  name?: string
  picture?: string
  createdAt?: string
  updatedAt?: string

  lastMessage?: ICustomerMessage
}

const CustomerSchema = new Schema(
  {
    number: {
      type: String,
      required: true,
      set: (num: string) => num.replace('whatsapp:', ''),
      unique: [true, 'Cliente já existente']
    },
    name: {
      type: String,
      default: ''
    },
    picture: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
)

CustomerSchema.plugin(clientPlugin)

export default Mongoose.model<ICustomer>('customers', CustomerSchema)
