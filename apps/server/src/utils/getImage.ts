import axios from 'axios'
import fileType from 'file-type'
import { File } from '../models'

export default async url => {
  const image = await axios.get(url, { responseType: 'arraybuffer' })
  const buffer = Buffer.from(image.data)
  const { _id } = await File.create({
    base64: buffer.toString('base64'),
    type: fileType(buffer).mime,
    name: url
  })
  return `/images/${_id}`
}
