import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex } from "global_styles";

export const Container = styled(Flex)`
  background-size: 15px;
  background-color: white;
  box-sizing: border-box;
  padding: 15px;
  flex-shrink: 0;
  border-bottom: 1px solid #eaeaea;
`;

export const Input = styled.input`
  margin: 0 10px;
  font-size: 15px;
  box-sizing: border-box;
  border: none;
  outline: none;
  width: 100%;
  ::placeholder {
    color: #91969c;
  }
`;

export const Lock = styled(FontAwesomeIcon)`
  color: #a5a9ae;
  transition: 200ms ease-in-out;
  cursor: pointer;
  :hover {
    color: #868686;
  }
`;
