import styled from 'styled-components'
import { Flex } from 'global_styles'

export const Container = styled(Flex)`
  display: flex;
  min-height: 40px;
  height: ${props => props.height && `${props.height}px`};
  z-index: 5;
  flex-shrink: 0;
  background-color: white;
  padding: 0 25px;
`
export const Input = styled.input`
  font-size: 15px;
  width: 100%;
  outline: none;
  border: 0;
  height: 100%;
  padding: 0 20px;
  color: #565656;

  ::placeholder {
    color: #bcbcbc;
  }
`
