
import styled from 'styled-components';
import { Flex } from './global_styles';

export interface ContainerProps {
  height?: number;
}

export const Container = styled(Flex)<ContainerProps>`
  display: flex;
  min-height: 40px;
  height: ${props => props.height && `${props.height}px`};
  z-index: 5;
  flex-shrink: 0;
  background-color: white;
  padding: 0 25px;
`;

export const Input = styled.input`
  font-size: 15px;
  width: 100%;
  outline: none;
  border: 0;
  height: 100%;
  padding: 0 20px;
  color: #565656;

  ::placeholder {
    color: #bcbcbc;
  }
`;


In the TypeScript version, I've defined an interface `ContainerProps` to specify the props that `Container` component can accept. This helps in type-checking and providing auto-completion support in IDEs. The imports and exports are now using ESM syntax.