import React from 'react'
import { ThemeProvider } from 'styled-components'
import moment from 'moment'
import Feedback from 'components/Feedback'
import {
  Message,
  Container,
  Time,
  Picture,
  Embed,
  sendingTheme,
  recievingTheme
} from './styles'

export default props => {
  const { self, date, children, googleId, embed, status, from, ...rest } = props
  console.log(googleId)
  return (
    <ThemeProvider theme={self ? sendingTheme : recievingTheme}>
      <Container {...rest}>
        <Message>
          {embed && <Embed>{embed}</Embed>}
          {children}
          {!children && !embed && '🚫 Este tipo de arquivo não é suportado.'}
          <Time>
            {moment(date).format('HH:mm')}
            {self && <Feedback style={{ marginLeft: 5 }} status={status} />}
          </Time>
        </Message>
        {self && <Picture size={40} googleId={googleId} />}
      </Container>
    </ThemeProvider>
  )
}
