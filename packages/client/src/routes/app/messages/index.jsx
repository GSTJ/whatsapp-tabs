import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import { useMutation } from '@apollo/react-hooks'
import {
  SEND_USER_MESSAGE,
  SEND_CLIENT_MESSAGE,
  UPLOAD_FILE
} from 'graphql/requests'
import { Selected } from '../styles'
import { FileDrop } from './styles'
import Messages from './scroll'
import Navbar from './components/navbar'
import Send from './components/send'

const { NODE_ENV } = process.env
const production = NODE_ENV === 'production'
const port = production ? 80 : 8087

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result.split(',').pop())
    reader.onerror = error => reject(error)
  })
}

export default () => {
  const selected = useSelector(state => state.internal.selected)
  const client = useSelector(state => state.clients).get(selected)
  const user = useSelector(state => state.users).get(selected)

  const { enqueueSnackbar } = useSnackbar()

  const [sendUserMessage] = useMutation(SEND_USER_MESSAGE)
  const [sendClientMessage] = useMutation(SEND_CLIENT_MESSAGE)

  const handleSend = useCallback(
    vars => {
      const options = { variables: { message: { ...vars, to: selected } } }
      if (client) return sendClientMessage(options)
      if (user) return sendUserMessage(options)
      throw new Error('Target not found')
    },
    [client, selected, sendClientMessage, sendUserMessage, user]
  )

  const handleFile = useCallback(
    response => {
      const { _id, type } = response.uploadFile
      handleSend({
        media: `http://link2.microimport.com.br:${port}/images/${_id}`,
        contentType: type
      })
    },
    [handleSend]
  )

  const [fileUpload] = useMutation(UPLOAD_FILE, { onCompleted: handleFile })

  const handleUpload = useCallback(
    async files => {
      Array.from(files).forEach(async File => {
        const { name, type } = File
        if (!/pdf|png|jpeg|jpg|mp3|mp4/.test(type))
          return enqueueSnackbar('Tipo de arquivo não suportado.', {
            variant: 'warning'
          })
        const base64 = await getBase64(File)
        const file = { name, type, base64 }
        fileUpload({ variables: { file } })
      })
    },
    [enqueueSnackbar, fileUpload]
  )

  return (
    <Selected key={selected}>
      <Navbar />
      <FileDrop handleDrop={handleUpload}>
        <Messages />
      </FileDrop>
      <Send onSend={handleSend} onUpload={handleUpload} />
    </Selected>
  )
}
