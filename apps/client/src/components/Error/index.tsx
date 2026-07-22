import React from "react";
import { Error } from "./styles";

type ErrorProps = {
  children?: string;
  type?: string;
}

const ErrorComponent = (props: ErrorProps): JSX.Element => {
  const { children = "Lorem ipsum.", type = "error", ...rest } = props;
  return (
    <Error {...rest} type={type}>
      {children}
    </Error>
  );
}

export default ErrorComponent;