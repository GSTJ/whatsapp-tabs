import React from "react";
import { ThemeProvider } from "styled-components";
import moment from "moment";
import { Feedback } from "components";
import { Message, Container, Time, Picture, Embed, sendingTheme, recievingTheme } from "./styles";
import Default from "./resources/profile-default.png";

export default (props) => {
  const { self, date, children, picture, embed, status, from, ...rest } = props;
  return (
    <ThemeProvider theme={self ? sendingTheme : recievingTheme}>
      <Container {...rest}>
        <Message>
          {embed && <Embed>{embed}</Embed>}
          {children}
          {!children && !embed && "🚫 Este tipo de arquivo não é suportado."}
          <Time>
            {moment(date).format('HH:mm')}
            {self && <Feedback style={{ marginLeft: 5 }} status={status} />}
          </Time>
        </Message>
        {self && <Picture size={40} src={picture || Default} />}
      </Container>
    </ThemeProvider>
  );
};
