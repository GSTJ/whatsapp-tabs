import styled from 'styled-components';
import { Overflow } from 'global_styles';

export interface MessageListProps {
  children: React.ReactNode;
}

export const MessageList = styled(Overflow)<MessageListProps>`
  padding: 10px 10px 0;
  height: calc(100vh - 172px);
  width: 100%;
  z-index: 10;
`;

export default MessageList;