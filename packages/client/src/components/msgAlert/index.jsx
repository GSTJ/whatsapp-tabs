import React from "react";
import { Flex } from "global_styles";
import { Alert } from "./styles";

const MsgAlert = ({ children }) => (
  <Flex>
    <Alert>{children}</Alert>
  </Flex>
);

export default MsgAlert;
