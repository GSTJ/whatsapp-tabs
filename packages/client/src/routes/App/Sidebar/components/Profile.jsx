import React from 'react'
import { useSelector } from 'react-redux'
import { Profile } from 'components'

export default () => {
  const users = useSelector(state => state.users)
  const profile = useSelector(state => state.internal.profile)

  return <Profile {...users.get(profile._id)} />
}
