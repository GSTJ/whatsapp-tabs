/* eslint-disable react/no-array-index-key */
import React from "react";
import { Toggle, Part } from "./styles";

function Selector(props) {
  const { onClick = () => false, selecionado, icons, ...rest } = props;
  return (
    <Toggle {...rest}>
      {icons.map((icon, index) =>
        <Part selected={selecionado === index} key={index} onClick={() => onClick(index)}>
          {icon}
        </Part>
      )}
    </Toggle>
  );
}

export default Selector;
