import fileType from 'file-type'

const FILE = {
  base64: {
    type: String,
    validate: str => {
      const type = fileType(Buffer.from(str, 'base64'))
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
}

export default FILE
