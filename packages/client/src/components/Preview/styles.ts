import styled, { css, StyledComponent } from 'styled-components'
import { Flex, OverflowText } from 'global_styles'

export interface ConversationProps {
  selected?: boolean
}

export const Conversation: StyledComponent<
  'div',
  any,
  ConversationProps,
  never
> = styled(Flex)<ConversationProps>`
  color: #91969c;
  transition: 300ms;
  padding: 15px 20px;

  background-color: white;
  border-bottom: 1px solid #eaeaea;
  cursor: pointer;
  ${props =>
      props.selected &&
      css`
        background-color: #f2f2f2;
        color: #0f0f0f;
      `}
    :hover {
    background-color: #f2f2f2;
    color: #0f0f0f;
  }
`

export const Container: StyledComponent<'div', any, {}, never> = styled.div`
  width: 100%;
  overflow: hidden;
  margin-left: 15px;
`

export const Name: StyledComponent<'div', any, {}, never> = styled(
  OverflowText
)`
  color: #2a2a2a;
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
  margin-right: 15px;
  margin-bottom: 2px;
`

export const Message: StyledComponent<'div', any, {}, never> = styled(
  OverflowText
)`
  font-size: 13px;
`

export const Time: StyledComponent<'div', any, {}, never> = styled(
  OverflowText
)`
  font-size: 13px;
  flex-shrink: 0;
`

export const Separate: StyledComponent<'div', any, {}, never> = styled(Flex)`
  justify-content: space-between;
`
