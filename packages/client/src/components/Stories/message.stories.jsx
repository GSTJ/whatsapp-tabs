import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, date, select } from "@storybook/addon-knobs";
import Message from "../Message";

const Embed = () => (
  <img
    alt="Anexo"
    src={text("Imagem do Anexo", "https://picsum.photos/200?size=600")}
  />
);
const options = {
  Enviando: "sending",
  Enviada: "sent",
  Recebida: "delivered",
  Lida: "read"
};
storiesOf("Message", module).add("default", () => (
  <Message
    from="to"
    status={select("Status", options, "Lida")}
    picture={text("Foto", "https://randomuser.me/api/portraits/men/15.jpg")}
    self={boolean("Enviando", true)}
    date={date("Data", new Date())}
    embed={boolean("Anexo", true) && <Embed />}
  >
    {text("Mensagem", "Mensagem padrao")}
  </Message>
));
