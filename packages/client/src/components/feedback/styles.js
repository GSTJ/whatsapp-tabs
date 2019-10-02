import styled from "styled-components";
import { ReactComponent as tick } from "./resources/tick.svg";

export const Tick = styled(tick)`
  .tick1 {
    fill: ${props => props.status === "read" && "url(#blue1)"};
  }
  .tick2 {
    fill: ${props => props.status === "read" && "url(#blue2)"};
    display: ${props => props.status === "sent" && "none"};
  }
`;
