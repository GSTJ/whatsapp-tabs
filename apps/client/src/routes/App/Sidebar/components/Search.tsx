import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'ducks'
import { Search } from 'components'

interface InternalState {
  toggle: boolean
  search: string
  lock: boolean
}

export const MyComponent: React.FC = () => {
  const dispatch = useDispatch()
  const toggle = useSelector(
    (state: { internal: InternalState }) => state.internal.toggle
  )
  const search = useSelector(
    (state: { internal: InternalState }) => state.internal.search
  )
  const lock = useSelector(
    (state: { internal: InternalState }) => state.internal.lock
  )
  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(Actions.setSearch(target.value)),
    [dispatch]
  )

  return (
    <Search
      lock={!toggle}
      value={search}
      toggle={lock}
      onChange={handleChange}
      onToggle={() => dispatch(Actions.setLock(!lock))}
      placeholder="Procurar conversa."
    />
  )
}
