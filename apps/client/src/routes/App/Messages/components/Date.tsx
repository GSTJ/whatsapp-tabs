import React from 'react'
import moment from 'moment'
import { MsgAlert } from 'components'

interface DateWrapperProps {
  message: {
    createdAt: string
  }
  nextMessage: {
    createdAt: string
  } | null
}

export const DateWrapper: React.FC<DateWrapperProps> = ({
  message,
  nextMessage
}) => {
  if (!nextMessage) return <></>
  const nextDay = new Date(nextMessage.createdAt)
  const currentDay = new Date(message.createdAt)
  if (moment(currentDay).isSame(nextDay, 'day')) return <></>
  return <MsgAlert>{moment(currentDay).fromNow()}</MsgAlert>
}
