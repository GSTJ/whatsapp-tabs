import React from 'react'
import { Separator } from 'global_styles'
import { Profile, User, Username, Email } from './styles'

export default props => {
  const { googleId, email, name, status, ...rest } = props
  return (
    <Profile {...rest}>
      <User status={status} googleId={googleId} />
      <Separator width="10" />
      <div style={{ display: 'grid' }}>
        <Username>{name}</Username>
        <Email>{email}</Email>
      </div>
    </Profile>
  )
}
