import React, { FC } from 'react'
import { Send } from './styles'

interface SendWrapperProps {
  onSend: (data: any) => void
}

const SendWrapper: FC<SendWrapperProps> = ({ onSend, ...rest }) => {
  return (
    <Send
      {...rest}
      accept=".pdf,.png,.jpeg,.jpg,.mp4,.mp3"
      onSend={body => onSend({ body })}
    />
  )
}

export default SendWrapper
