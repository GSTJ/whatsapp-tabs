import React from "react";
import { faSearch, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Container, Lock } from "./styles";

export default props => {
  const { lock, toggle, onToggle } = props;
  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} color="#A5A9AE" />
      <Input {...props} />
      {lock && <Lock icon={toggle ? faLockOpen : faLock} onClick={onToggle} />}
    </Container>
  );
}
