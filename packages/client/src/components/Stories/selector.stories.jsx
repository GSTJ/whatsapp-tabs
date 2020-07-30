import React from 'react'
import { storiesOf } from '@storybook/react'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'
import Selector from '../Selector'

export const SelectorDefault = () => {
  const quantidade = number('Quantidade', 2, {}, 'Selector')
  const icons = Array(quantidade).fill(
    <FontAwesomeIcon color="white" icon={faComments} />
  )
  return (
    <Selector
      onClick={action('Selecionado')}
      selecionado={number('Index', 1, {}, 'Selector')}
      icons={icons}
    />
  )
}
storiesOf('Selector', module).add('default', SelectorDefault)
