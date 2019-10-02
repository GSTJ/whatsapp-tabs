import styled from "styled-components";
import { Flex, FullScreenFlex } from "global_styles";

export const Login = styled(FullScreenFlex)`
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
  h1 {
    font-size: 21px;
    margin: 20px 0 0;
  }
  form {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  section:last-of-type {
    margin-bottom: 20px;
  }
  .MuiButtonBase-root{
    height: 43px;
    width: 100%;
  }
`;
export const Header = styled(Flex)`
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid #f6f7f9;
`;
