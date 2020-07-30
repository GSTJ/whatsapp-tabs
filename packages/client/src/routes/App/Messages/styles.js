import styled from 'styled-components'
import { FileDrop as fileDrop } from 'components'
import Background from './resources/whatsapp-bg.png'

export const FileDrop = styled(fileDrop)`
  :after {
    content: '';
    background: url(${Background});
    background-repeat: repeat;
    opacity: 0.06;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
  background-color: #e5ddd5;
`
