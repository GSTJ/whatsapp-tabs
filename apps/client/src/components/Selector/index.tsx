import React, { FC } from 'react'
import { Toggle, Part } from './styles'

type SelectorProps = {
  onClick?: (index: number) => void
  selecionado: number
  icons: JSX.Element[]
}

const Selector: FC<SelectorProps> = ({
  onClick = () => false,
  selecionado,
  icons,
  ...rest
}) => {
  return (
    <Toggle {...rest}>
      {icons.map((icon, index) => (
        <Part
          selected={selecionado === index}
          key={index}
          onClick={() => onClick(index)}
        >
          {icon}
        </Part>
      ))}
    </Toggle>
  )
}

export default Selector
