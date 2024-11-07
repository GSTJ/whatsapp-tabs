import styled from 'styled-components'
import tick from './resources/tick.svg'

export type TickProps = {
  status: 'read' | 'sent'
}

export const Tick = styled(tick)<TickProps>`
  .tick1 {
    fill: ${props => props.status === 'read' && 'url(#blue1)'};
  }
  .tick2 {
    fill: ${props => props.status === 'read' && 'url(#blue2)'};
    display: ${props => props.status === 'sent' && 'none'};
  }
`
