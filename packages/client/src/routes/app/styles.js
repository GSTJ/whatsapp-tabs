import styled from "styled-components";
import Div100vh from "react-div-100vh";
import { Overflow } from "global_styles";

export const Container = styled(Overflow)`
  height: 100%;
  background-color: #f3f3f3;
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #e8d9c7;
  box-sizing: border-box;
  width: 100%;
`;

export const Sidebar = styled.div`
  min-width: 250px;
  width: 100%;
  flex-shrink: 3;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #bdbdbd;
`;

export const Grid = styled(Div100vh)`
  display: flex;
  box-sizing: border-box;
  background-color: #efefef;
  transform: translate3d(0, 0, 0);
`;
