import 'moment/locale/pt'
import React from 'react'
import moment from 'moment'
import { ProfilePic } from 'global_styles'
import { formatPhoneNumber } from 'react-phone-number-input'
import Feedback from '../Feedback'
import Default from './resources/profile-default.png'
import {
  Separate,
  Conversation,
  Container,
  Name,
  Message,
  Time
} from './styles'

moment.locale('pt')

function Preview(props) {
  const {
    customer,
    date,
    self,
    message,
    status,
    onClick = () => false,
    ...rest
  } = props
  const { name, number, picture } = customer
  const newDate = moment(date)

  return (
    <Conversation {...rest} onClick={() => onClick(customer)}>
      <ProfilePic src={picture || Default} size={40} />
      <Container>
        <Separate>
          <Name>{name || formatPhoneNumber(number) || 'undefined'}</Name>
          <Time>{newDate.isValid() && newDate.fromNow()}</Time>
        </Separate>
        <Message>
          {self && <Feedback style={{ marginRight: 5 }} status={status} />}
          {message || (newDate.isValid() ? 'Enviou um arquivo' : 'Diga olá!')}
        </Message>
      </Container>
    </Conversation>
  )
}
export default Preview
