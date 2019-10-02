import styled, { css } from "styled-components";

export const Toggle = styled.div`
  display: flex;
  height: 37px;
  background-image: linear-gradient(to right, #0bc0a1, #40dc9f);
  transition: 0;
  flex-shrink: 0;
`;
export const Part = styled.div`
  flex-grow: 1;
  transition: 300ms;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${props =>
    props.selected &&
    css`
      border-color: #3bdeab;
      border-bottom-style: solid;
    `}
  :hover {
    background-color: #e4e4e424;
  }
`;
