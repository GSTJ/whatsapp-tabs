import React, { useState, useCallback } from 'react'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RoundButton } from 'global_styles'
import { Container, Input } from './styles'
import Upload from './components/Upload'

function Send(props) {
  const mockFunction = () => false
  const {
    onSend = mockFunction,
    onUpload = mockFunction,
    accept,
    ...rest
  } = props
  const [input, setInput] = useState('')
  const handleChange = useCallback(({ target }) => setInput(target.value), [
    setInput
  ])
  const sendMessage = useCallback(() => {
    onSend(input)
    setInput('')
  }, [input, onSend])
  const handleKeyPress = useCallback(
    e => {
      if (e.charCode !== 13) return
      sendMessage()
    },
    [sendMessage]
  )

  return (
    <Container {...rest}>
      <Upload size={40} accept={accept} onUpload={onUpload} />
      <Input
        type="text"
        id="mensagem"
        value={input}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Digite uma mensagem."
      />
      <RoundButton size={40} onClick={sendMessage}>
        <FontAwesomeIcon color="#0ec1a1" icon={faPaperPlane} />
      </RoundButton>
    </Container>
  )
}

export default Send
