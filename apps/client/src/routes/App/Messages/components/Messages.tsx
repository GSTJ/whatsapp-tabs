import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Message from './Message'
import Date from './Date'

interface User {
  id: number;
  name: string;
  messages: Map<number, string>;
}

interface Customer {
  id: number;
  name: string;
  messages: Map<number, string>;
}

export default function MessageList() {
  const users = useSelector((state: { users: Map<number, User>, customers: Map<number, Customer>, internal: { selected: number } }) => state.users)
  const customers = useSelector((state: { users: Map<number, User>, customers: Map<number, Customer>, internal: { selected: number } }) => state.customers)
  const selected = useSelector((state: { users: Map<number, User>, customers: Map<number, Customer>, internal: { selected: number } }) => state.internal.selected)

  const user = users.get(selected)
  const customer = customers.get(selected)

  let currentMessages: Array<string> = []

  if (customer && customer.messages)
    currentMessages = [...customer.messages.values()]
  if (user && user.messages) currentMessages = [...user.messages.values()]

  return currentMessages.reverse().map((message, index) => {
    const nextMessage = currentMessages[index + 1]
    const user = message.to && users.get(message.from)
    return (
      <Fragment key={message.createdAt}>
        <Message user={user} message={message} />
        <Date message={message} nextMessage={nextMessage} />
      </Fragment>
    )
  })
}