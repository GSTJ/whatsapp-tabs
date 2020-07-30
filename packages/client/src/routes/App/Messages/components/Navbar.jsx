import React, { useCallback } from 'react'
import { Navbar } from 'components'
import { formatPhoneNumber } from 'react-phone-number-input'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useMutation } from '@apollo/client'
import { UNMARK_CUSTOMER } from 'graphql/requests'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'ducks'

export default () => {
  const dispatch = useDispatch()

  const selected = useSelector(state => state.internal.selected)
  const customer = useSelector(state => state.customers).get(selected)
  const user = useSelector(state => state.users).get(selected)

  const isMobile = useMediaQuery('(max-width:750px)')
  const [unmark] = useMutation(UNMARK_CUSTOMER)

  const setFoward = useCallback(bool => dispatch(Actions.setFoward(bool)), [
    dispatch
  ])
  const setSelected = useCallback(
    value => dispatch(Actions.setSelected(value)),
    [dispatch]
  )
  const unmarkCustomer = useCallback(
    () => unmark({ variables: { customer: selected } }),
    [selected, unmark]
  )

  const { name = '', number } = customer || user || {}

  return (
    <Navbar
      onFoward={setFoward}
      onUnmark={unmarkCustomer}
      onBack={() => setSelected(null)}
      foward={customer}
      unmark={customer}
      back={isMobile}
      id={selected}
      name={name}
      defaultText={formatPhoneNumber(number) || 'Selecione uma conversa.'}
      height={90}
    />
  )
}
