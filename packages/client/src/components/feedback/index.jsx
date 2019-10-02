import React from "react";
import { ReactComponent as Error } from "./resources/error.svg";
import { ReactComponent as Clock } from "./resources/clock.svg";
import { Tick } from "./styles";

function Feedback({ status, ...rest }) {
  if (status === "sending") return <Clock {...rest} />
  if (status === "failed") return <Error {...rest} />
  return <Tick {...rest} status={status} />
}

export default Feedback;
