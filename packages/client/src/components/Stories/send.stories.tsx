import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'
import Send from '../Send'

interface SendProps {
  height: number
  onSend: () => void
}

export const SendComponent: React.FC<SendProps> = ({ height, onSend }) => (
  <Send
    height={number('Altura', height, {}, 'Enviar')}
    onSend={action('Mensagem enviada')}
  />
)

storiesOf('Enviar', module).add('default', () => (
  <SendComponent height={70} onSend={() => {}} />
))
