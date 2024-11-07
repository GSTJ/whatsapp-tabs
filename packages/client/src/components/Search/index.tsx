import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faSearch, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input, Container, Lock } from './styles'

type Props = {
  lock: boolean
  toggle: boolean
  onToggle: () => void
}

const SearchComponent: React.FC<Props> = props => {
  const { lock, toggle, onToggle } = props
  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} color="#A5A9AE" />
      <Input {...props} />
      {lock && <Lock icon={toggle ? faLockOpen : faLock} onClick={onToggle} />}
    </Container>
  )
}

export default SearchComponent
