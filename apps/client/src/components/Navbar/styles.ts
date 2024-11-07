import styled from 'styled-components'
import { Flex } from './global_styles'

export interface NavbarProps {
  height?: number
}

export const Navbar = styled(Flex)<NavbarProps>`
  background-color: white;
  height: ${props => `${props.height}px` || 'auto'};

  flex-shrink: 0;
  border-bottom: 1px solid #bdbdbd;
  padding: 0 25px;
  z-index: 5;
`

export const Username = styled.div`
  flex-grow: 1;
  text-align: center;
  margin: auto;
  font-weight: bold;
  text-transform: capitalize;
`
