import styled, { css } from 'styled-components'
import Div100vh from 'react-div-100vh'
import Avatar from 'react-avatar'

export const Separator = styled.div`
  height: ${props => props.height || 0}px;
  width: ${props => props.width || 0}px;
  flex-shrink: 0;
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Overflow = styled.div`
  overflow-y: auto;
  transform: translate3d(0, 0, 0);
`
export const OverflowText = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
export const ProfilePic = styled(Avatar).attrs({ round: true })`
  flex-shrink: 0;
`
export const Center = styled(Flex)`
  flex-wrap: wrap;
  height: 100%;
`

export const RoundButton = styled(Flex)`
  background-color: #f7f7f7;
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  transition: 200ms;
  flex-shrink: 0;
  cursor: pointer;
  :hover {
    background-color: #f1f1f1;
  }
`
export const FullScreenFlex = styled(Div100vh)`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Focus = styled(FullScreenFlex)`
  position: absolute;
  left: 0;
  z-index: 15;
  background-color: #00000090;
  visibility: hidden;
  transition: opacity 200ms linear, visibility 200ms linear;
  ${props =>
    props.open
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`
