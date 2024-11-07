import Mongoose, { Schema, Document } from 'mongoose'
import FileType from 'file-type'

export interface IFile extends Document {
  base64: string
  type: string
  name: string
  createdAt?: string
  updatedAt?: string
}

const FileSchema = new Schema(
  {
    base64: {
      type: String,
      validate: str => {
        const type = FileType(Buffer.from(str, 'base64'))
        return /pdf|png|jpeg|jpg|mp3|mp4/.test(type.mime)
      },
      required: true
    },
    type: {
      type: String,
      validate: type => /pdf|png|jpeg|jpg|mp3|mp4/.test(type),
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default Mongoose.model<IFile>('files', FileSchema)
