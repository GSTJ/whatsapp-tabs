import React, { useCallback } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_CUSTOMER_MESSAGES, GET_USER_MESSAGES } from 'graphql/requests'
import { Actions } from 'ducks'
import { useSelector, useDispatch } from 'react-redux'
import { Preview, Error } from 'components'
import { Container } from '../../styles'

export default () => {
  const { internal, users, customers } = useSelector(state => state)
  const { profile, toggle, search, selected, lock } = internal
  const my = users.get(profile._id)

  const dispatch = useDispatch()

  const addCustomerMessages = useCallback(
    data => dispatch(Actions.addCustomerMessages(data.CustomerMessages)),
    [dispatch]
  )
  const [getCustomerMessages] = useLazyQuery(GET_CUSTOMER_MESSAGES, {
    onCompleted: addCustomerMessages
  })

  const addUserMessages = useCallback(
    data => dispatch(Actions.addUserMessages(data.userMessages)),
    [dispatch]
  )
  const [getUserMessages] = useLazyQuery(GET_USER_MESSAGES, {
    onCompleted: addUserMessages
  })

  const searchFilter = useCallback(
    customer => {
      if (profile._id === customer._id) return false // Remove yourself from the list.
      const { number, name, lastMessage } = customer
      let filter
      if (name) filter = name.includes(search)
      if (number) filter = filter || number.includes(search)
      if (lastMessage) filter = filter || lastMessage.body.includes(search)
      return filter
    },
    [profile._id, search]
  )

  const filterLock = useCallback(
    customer => {
      // Workaround
      let owned = false
      users.forEach(user => {
        if (
          user._id !== profile._id &&
          user.conversations.includes(customer._id)
        )
          owned = true
      })
      if (!owned || lock) return true
      return my && my.conversations.includes(customer._id)
    },
    [lock, my, profile._id, users]
  )

  const loadMessages = useCallback(
    target => {
      dispatch(Actions.setSelected(target._id))
      if (customers.get(target._id) && target.firstLoad)
        return getCustomerMessages({ variables: { clientID: target._id } })
      if (users.get(target._id) && target.firstLoad)
        return getUserMessages({ variables: { userID: target._id } })
      console.error('Target does not exist')
    },
    [customers, dispatch, getCustomerMessages, getUserMessages, users]
  )

  const hasConversations = customers && customers.size !== 0

  return (
    <Container>
      {!hasConversations ? (
        <Error style={{ margin: 25 }} type="alert">
          Nenhuma conversa em andamento.
        </Error>
      ) : (
        (toggle
          ? [...users.values()]
          : [...customers.values()].filter(filterLock)
        )
          .filter(searchFilter)
          .map(target => {
            const { body, createdAt, status, to } =
              (target.messages && target.messages.order()[0]) ||
              target.lastMessage ||
              {}

            return (
              <Preview
                customer={target}
                self={!!to}
                message={body}
                status={status}
                selected={selected === target._id}
                date={new Date(createdAt) || Date.now()}
                onClick={loadMessages}
                id={target._id}
                key={target._id}
              />
            )
          })
      )}
    </Container>
  )
}
