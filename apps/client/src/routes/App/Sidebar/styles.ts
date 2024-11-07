import styled from 'styled-components'

export interface SidebarProps {
  // Add any props here
}

export const Sidebar = styled.div<SidebarProps>`
  min-width: 250px;
  width: 100%;
  flex-shrink: 3;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #bdbdbd;
`
