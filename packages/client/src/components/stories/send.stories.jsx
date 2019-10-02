import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import Send from "../send";

storiesOf("Enviar", module).add("default", () => (
  <Send
    height={number("Altura", 70, {}, "Enviar")}
    onSend={action("Mensagem enviada")}
  />
));
