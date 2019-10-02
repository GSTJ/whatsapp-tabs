import styled from "styled-components";
import { Flex, FullScreenFlex } from "global_styles";

export const RegisterContainer = styled(FullScreenFlex)`
  flex-direction: column;
`;
export const InnerContaner = styled(Flex)`
   margin-top: 30px;
  flex-direction: column;
  max-width: 500px;
  min-width: 350px;
  width: 100%;
  max-height: 500px;
  background-color: white;
  border-radius: 5px;
  padding: 30px 20px;
  border: 1px solid #e8e8e8;
  > h1 {
    font-size: 21px;
    margin: 20px 0 0;
  }
  > div {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  > button{
    width: 100%;
    height: 45px;
  }
  section:last-of-type {
    margin-bottom: 20px;
  }
  .MuiButtonBase-root{
    height: 43px;
    width: 100%;
  }
`;
