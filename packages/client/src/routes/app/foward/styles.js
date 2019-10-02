import styled, { css } from "styled-components";
import { Profile as profile } from "components";
import { Overflow, Flex, RoundButton } from "global_styles";

export const Profile = styled(profile)`
  transition: 300ms;
  border-radius: 5px;
  padding: 15px 20px;
  margin-bottom: 5px;
  box-shadow: 0 2px 3px #00000020;
  background-color: #f2f2f2;
  cursor: not-allowed;
  ${props => props.status === "online" && css`
    cursor: pointer;
    background-color: #fff;
    :hover {
      background-color: #f2f2f2;
      color: #0f0f0f;
    }
  ` }
`;
export const Header = styled(Flex)`
  background-image: linear-gradient(to right, #0bc0a1, #40dc9f);
  z-index: 20;
  height: 20%;
  max-height: 100px;
  @media (max-width: 750px) {
    max-height: 200px;
  }
`;
export const Foward = styled.div`
  width: 70vw;
  height: 90vh;
  background-color: #e6e6e6;
  box-shadow: 0 2px 3px #00000020;
  border-radius: 5px;
  overflow: hidden;
  color: #2b2b2b;
  font-family: "Averta", "Helvetica Neue";
  @media (max-width: 750px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;
export const Container = styled(Overflow)`
  height: 100%;
  padding: 10px;
`;
export const Close = styled(RoundButton)`
  margin: 25px 25px auto auto;
`;
export const Title = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin: 0 40px;
  max-height: 70%;
  color: #222222;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px #2ab19a;
  > span {
    text-transform: capitalize;
  }
`;
