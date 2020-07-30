import React from "react";
import { Error } from "./styles";

export default props => {
  const { children = "Lorem ipsum.", type="error", ...rest } = props;
  return (
    <Error {...rest} type={type}>
      {children}
    </Error>
  );
}