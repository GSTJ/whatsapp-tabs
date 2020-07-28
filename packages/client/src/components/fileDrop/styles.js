import styled, { css } from 'styled-components'
import { Flex } from 'global_styles'

export const FileDrop = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  position: relative;
`

export const Overlay = styled(Flex)`
  flex-direction: column;
  background-color: rgba(0, 116, 161, 0.5);
  color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  font-weight: bold;
  font-size: 20px;
  visibility: hidden;

  transition: opacity 100ms linear, visibility 100ms linear;
  ${props =>
    props.visible
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
  .fa-file-upload {
    margin-bottom: 10px;
  }
`
