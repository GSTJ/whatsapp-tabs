import React from "react";
import { faShareSquare, faAngleLeft, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RoundButton, Separator } from "global_styles"
import { Username, Navbar } from "./styles";

export default props => {
  const { name, id, defaultText = "Lorem ipsum", unmark, onUnmark, back, onBack, foward, onFoward = () => false, ...rest } = props;
  return (
    <Navbar {...rest}>
      {back && (
        <RoundButton size={40} onClick={() => onBack(id)}>
          <FontAwesomeIcon size="lg" icon={faAngleLeft} />
        </RoundButton>
      )}
      <Username>{name || defaultText} </Username>
      {foward && (
        <RoundButton size={40} onClick={() => onFoward(id)}>
          <FontAwesomeIcon icon={faShareSquare} />
        </RoundButton>
      )}
      <Separator width={10} />
      {unmark && (
        <RoundButton size={40} onClick={() => onUnmark(id)}>
          <FontAwesomeIcon icon={faClipboardCheck} />
        </RoundButton>
      )}
    </Navbar>
  );
}
