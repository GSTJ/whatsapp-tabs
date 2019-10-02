import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";
import Error from "../error";

const options = {
  Aviso: "alert",
  Erro: "error"
};

export const ErrorDefault = () => (
  <Error type={select("Tipo", options, "alert")}>
    {text("Mensagem", "Nenhuma conversa em andamento")}
  </Error>
);

storiesOf("Errors", module).add("default", ErrorDefault);
