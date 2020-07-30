import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Message from './Message'
import Date from './Date'

export default () => {
  const users = useSelector(state => state.users)
  const customers = useSelector(state => state.customers)
  const selected = useSelector(state => state.internal.selected)

  const user = users.get(selected)
  const customer = customers.get(selected)

  let currentMessages = []

  if (customer && customer.messages)
    currentMessages = [...customer.messages.order()]
  if (user && user.messages) currentMessages = [...user.messages.order()]

  return currentMessages.reverse().map((message, index) => {
    const nextMessage = currentMessages[index + 1]
    const user /* */ = message.to && users.get(message.from)
    return (
      <Fragment key={message.createdAt}>
        <Message user /* */={user /* */} message={message} />
        <Date message={message} nextMessage={nextMessage} />
      </Fragment>
    )
  })
}
