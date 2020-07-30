import React, { useRef, useEffect, useCallback } from 'react'
import { useLazyQuery } from '@apollo/client'
import { Actions } from 'ducks'
import { GET_USER_MESSAGES, GET_CLIENT_MESSAGES } from 'graphql/requests'
import InfiniteScroll from 'react-infinite-scroller'
import { useSelector, useDispatch } from 'react-redux'
import { MsgLoader } from 'components'
import { MessageList } from './styles'
import MessagesDisplay from './messages'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default () => {
  const scroll = useRef()
  const dispatch = useDispatch()

  const selected = useSelector(state => state.internal.selected)
  const client = useSelector(state => state.clients).get(selected)
  const user = useSelector(state => state.users).get(selected)

  const addClientMessages = useCallback(
    data => dispatch(Actions.addClientMessages(data.clientMessages)),
    [dispatch]
  )
  const [getClientMessages] = useLazyQuery(GET_CLIENT_MESSAGES, {
    onCompleted: addClientMessages
  })

  const addUserMessages = useCallback(
    data => dispatch(Actions.addUserMessages(data.userMessages)),
    [dispatch]
  )
  const [getUserMessages] = useLazyQuery(GET_USER_MESSAGES, {
    onCompleted: addUserMessages
  })

  const target = client || user || {}
  const previous = usePrevious(selected)

  const scrollToBottom = useCallback(ignore => {
    if (!scroll.current)
      return ignore && setTimeout(() => scrollToBottom(true), 100) // Workaround, may lead to an infinite loop if current is never set
    const { scrollHeight, scrollTop } = scroll.current
    if (scrollHeight - 1000 < scrollTop || ignore)
      scroll.current.scrollTop = scrollHeight
  }, [])

  //   setInterval(() => scroll.current && console.log(123) && scroll.current.scrollIntoView({ block: 'end', behavior: 'smooth' }), 1000)
  const loadMore = useCallback(() => {
    if (!selected) return //            clientID: selected,
    if (client)
      getClientMessages({
        variables: {
          clientID: client._id,
          cursor: client.cursor
        }
      })
    if (user)
      getUserMessages({
        variables: {
          userID: user._id,
          cursor: user.cursor
        }
      })
  }, [selected, client, getClientMessages, user, getUserMessages])

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
