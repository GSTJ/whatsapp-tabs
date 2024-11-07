import React, { useState, useCallback } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatPhoneNumber } from 'react-phone-number-input'
import { useMutation } from '@apollo/client'
import { FOWARD_CUSTOMER } from 'graphql/requests'
import { Actions } from 'ducks'
import { useSelector, useDispatch } from 'react-redux'
import { Search } from 'components'
import { Focus } from 'global_styles'
import { Foward, Profile, Container, Header, Close, Title } from './styles'

export type User = {
  _id: string
  name: string
  email: string
  status: string
}

export default () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState<string>('')

  const { users, customers, internal } = useSelector((state: any) => state)
  const { profile, selected, foward } = internal
  const customer = customers.get(selected) || {}

  const [fowardClient] = useMutation(FOWARD_CUSTOMER)

  const filter = useCallback(
    (user: User) =>
      profile._id !== user._id &&
      (user.name.includes(search) || user.email.includes(search)),
    [profile._id, search]
  )
  const handleChange = useCallback(
    (obj: React.ChangeEvent<HTMLInputElement>) => setSearch(obj.target.value),
    [setSearch]
  )

  const close = useCallback(() => dispatch(Actions.setFoward('')), [dispatch])
  const set = useCallback(
    (user: User) => {
      if (user.status !== 'online') return false
      fowardClient({ variables: { customer: selected, to: user._id } })
      return close()
    },
    [close, fowardClient, selected]
  )

  return (
    <Focus open={foward}>
      <Foward>
        <Header>
          <Title>
            Encaminhar{' '}
            <span>
              {customer.name ||
                formatPhoneNumber(customer.number) ||
                'undefined'}
            </span>{' '}
            para:
          </Title>
          <Close size={40} onClick={close}>
            <FontAwesomeIcon icon={faTimes} />
          </Close>
        </Header>
        <Search
          value={search}
          onChange={handleChange}
          placeholder="Procurar usuário."
        />
        <Container>
          {[...users.values()].filter(filter).map((user: User) => (
            <Profile {...user} onClick={() => set(user)} key={user._id} />
          ))}
        </Container>
      </Foward>
    </Focus>
  )
}
