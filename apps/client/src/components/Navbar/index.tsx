
import React, { FC } from "react";
import { faShareSquare, faAngleLeft, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RoundButton, Separator } from "global_styles";
import { Username, Navbar } from "./styles";

type NavbarProps = {
  name: string;
  id: number;
  defaultText?: string;
  unmark: boolean;
  onUnmark: (id: number) => void;
  back: boolean;
  onBack: (id: number) => void;
  foward: boolean;
  onFoward?: (id: number) => boolean;
};

const NavbarComponent: FC<NavbarProps> = (props) => {
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

export default NavbarComponent;
export type { NavbarProps };
