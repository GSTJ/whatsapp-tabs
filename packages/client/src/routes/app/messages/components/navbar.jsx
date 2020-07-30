import React, { useCallback } from 'react'
import { Navbar } from 'components'
import { formatPhoneNumber } from 'react-phone-number-input'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useMutation } from '@apollo/client'
import { UNMARK_CLIENT } from 'graphql/requests'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'ducks'

export default () => {
  const dispatch = useDispatch()

  const selected = useSelector(state => state.internal.selected)
  const client = useSelector(state => state.clients).get(selected)
  const user = useSelector(state => state.users).get(selected)

  const isMobile = useMediaQuery('(max-width:750px)')
  const [unmark] = useMutation(UNMARK_CLIENT)

  const setFoward = useCallback(bool => dispatch(Actions.setFoward(bool)), [
    dispatch
  ])
  const setSelected = useCallback(
    value => dispatch(Actions.setSelected(value)),
    [dispatch]
  )
  const unmarkClient = useCallback(
    () => unmark({ variables: { client: selected } }),
    [selected, unmark]
  )

  const { name = '', number } = client || user || {}

  return (
    <Navbar
      onFoward={setFoward}
      onUnmark={unmarkClient}
      onBack={() => setSelected(null)}
      foward={client}
      unmark={client}
      back={isMobile}
      id={selected}
      name={name}
      defaultText={formatPhoneNumber(number) || 'Selecione uma conversa.'}
      height={90}
    />
  )
}
