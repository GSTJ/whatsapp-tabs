import styled from "styled-components";
import { Flex } from "global_styles";

const Types = {
  error: "#dc6464",
  alert: "#fbad4c"
};

export const Error = styled(Flex)`
  transition: 0.4s;
  padding: 15px;
  font-family: "Averta", "Helvetica Neue";
  border-radius: 5px;
  background-color: ${props => Types[props.type]};
  color: white;
`;
