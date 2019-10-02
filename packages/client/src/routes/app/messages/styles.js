import styled from "styled-components";
import { FileDrop as fileDrop } from "components";
import { Overflow } from "global_styles";
import Background from "./resources/whatsapp-bg.png";

export const MessageList = styled(Overflow)`
  padding: 10px 10px 0;
  height: calc(100vh - 172px);
  width: 100%;
  z-index: 10;
`;
export const FileDrop = styled(fileDrop)`
  :after {
    content: "";
    background: url(${Background});
    background-repeat: repeat;
    opacity: 0.06;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
  background-color: #e5ddd5;
`;
