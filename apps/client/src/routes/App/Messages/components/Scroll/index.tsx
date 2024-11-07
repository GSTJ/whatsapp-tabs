import React, { useRef, useEffect, useCallback } from 'react'
import { useLazyQuery } from '@apollo/client'
import { Actions } from 'ducks'
import { GET_USER_MESSAGES, GET_CUSTOMER_MESSAGES } from 'graphql/requests'
import InfiniteScroll from 'react-infinite-scroller'
import { useSelector, useDispatch } from 'react-redux'
import { MsgLoader } from 'components'
import { MessageList } from './styles'
import MessagesDisplay from '../Messages'

type User = {
  _id: string
  cursor: string
}

type Customer = {
  _id: string
  cursor: string
}

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default () => {
  const scroll = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const selected = useSelector((state: any) => state.internal.selected)
  const customer = useSelector(
    (state: any) => state.customers.get(selected) as Customer
  )
  const user = useSelector((state: any) => state.users.get(selected) as User)

  const addCustomerMessages = useCallback(
    (data: any) => dispatch(Actions.addCustomerMessages(data.CustomerMessages)),
    [dispatch]
  )
  const [getCustomerMessages] = useLazyQuery(GET_CUSTOMER_MESSAGES, {
    onCompleted: addCustomerMessages
  })

  const addUserMessages = useCallback(
    (data: any) => dispatch(Actions.addUserMessages(data.userMessages)),
    [dispatch]
  )
  const [getUserMessages] = useLazyQuery(GET_USER_MESSAGES, {
    onCompleted: addUserMessages
  })

  const target = customer || user || {}
  const previous = usePrevious(selected)

  const scrollToBottom = useCallback((ignore: boolean) => {
    if (!scroll.current)
      return ignore && setTimeout(() => scrollToBottom(true), 100) // Workaround, may lead to an infinite loop if current is never set
    const { scrollHeight, scrollTop } = scroll.current
    if (scrollHeight - 1000 < scrollTop || ignore)
      scroll.current.scrollTop = scrollHeight
  }, [])

  const loadMore = useCallback(() => {
    if (!selected) return
    if (customer)
      getCustomerMessages({
        variables: {
          clientID: customer._id,
          cursor: customer.cursor
        }
      })
    if (user)
      getUserMessages({
        variables: {
          userID: user._id,
          cursor: user.cursor
        }
      })
  }, [selected, customer, getCustomerMessages, user, getUserMessages])

  scrollToBottom(target.firstLoad || previous !== selected)
  return (
    <MessageList ref={scroll}>
      <InfiniteScroll
        isReverse
        loadMore={loadMore}
        initialLoad={false}
        hasMore={target && !target.lastLoad}
        loader={<MsgLoader key="Loader" />}
        useWindow={false}
      >
        <MessagesDisplay />
      </InfiniteScroll>
    </MessageList>
  )
}
