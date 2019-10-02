import styled from "styled-components";
import { Flex, ProfilePic } from "global_styles";

export const Embed = styled.div`
  > * {
    border-radius: 5px;
    max-width: 100%;
    max-height: 50vh;
    min-width: 100px;
    min-height: 150px;
    width: auto;
    height: auto;
    margin-bottom: 10px;
  }
`;

export const Message = styled.div`
  font-size: 13px;
  padding: 15px;
  box-shadow: 0 2px 3px #00000020;
  color: #262626;
  max-width: 60%;
  word-break: break-word;
  font-family: "Averta", "Helvetica Neue";
  background-color: ${props => props.theme.backgroundColor};
  border-radius: ${props => props.theme.borderRadius};
  margin: ${props => props.theme.margin};
`;

export const Time = styled.div`
  font-size: 12px;
  float: right;
  margin: 5px -5px -5px 20px;
  color: ${props => props.theme.timeColor};
`;

export const Container = styled(Flex)`
  margin: ${props => props.theme.margin};
  align-items: flex-end;
`;

export const Picture = styled(ProfilePic)`
  margin: 5px;
`;

export const sendingTheme = {
  timeColor: "#484848",
  backgroundColor: "#a3ead0",
  borderRadius: "10px 10px 0 10px",
  margin: "0 3px 3px auto"
};
export const recievingTheme = {
  backgroundColor: "white",
  borderRadius: "10px 10px 10px 0",
  margin: "0 auto 3px 3px",
  timeColor: "#91969c"
};

Message.defaultProps = {
  theme: recievingTheme
};
Time.defaultProps = {
  theme: recievingTheme
};
Container.defaultProps = {
  theme: recievingTheme
};
