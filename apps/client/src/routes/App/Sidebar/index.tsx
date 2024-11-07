
import React from 'react'
import { Conversations, Search, Selector, Profile } from './components'
import { Sidebar } from './styles'

export type { ConversationsProps } from './components/Conversations'
export type { SearchProps } from './components/Search'
export type { SelectorProps } from './components/Selector'
export type { ProfileProps } from './components/Profile'

const SidebarComponent: React.FC = () => (
  <Sidebar>
    <Profile />
    <Selector />
    <Search />
    <Conversations />
  </Sidebar>
)

export default SidebarComponent
