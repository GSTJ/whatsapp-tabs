import React from 'react'
import { Separator } from 'global_styles'
import { Profile, User, Username, Email } from './styles'

export default props => {
  const { googleId, email, name, status, ...rest } = props
  console.log(googleId, 909)
  return (
    <Profile {...rest}>
      <User status={status} name={name} alt="user" />
      <Separator width="10" />
      <div>
        <Username>{name}</Username>
        <Email>{email}</Email>
      </div>
    </Profile>
  )
}
