
import React from "react";
import ErrorIcon from "./resources/error.svg";
import ClockIcon from "./resources/clock.svg";
import { Tick } from "./styles";

type Status = "sending" | "failed" | string;

interface FeedbackProps {
  status: Status;
}

function Feedback({ status, ...rest }: FeedbackProps): JSX.Element {
  if (status === "sending") return <ClockIcon {...rest} />;
  if (status === "failed") return <ErrorIcon {...rest} />;
  return <Tick {...rest} status={status} />;
}

export type { FeedbackProps };
export default Feedback;
