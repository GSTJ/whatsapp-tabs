import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text, date } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Preview from "../preview";

export const PreviewDefault = () => (
  <Preview
    id={10}
    onClick={action("Selecionado")}
    date={date("Data", new Date(), "Preview")}
    name={text("Nome do cliente", "Gabriel", "Preview")}
    number={text("Numero", "+5516123456789", "Preview")}
    message={text("Mensagem", "Eu tenho uma foto 😄", "Preview")}
    picture={text(
      "Foto",
      "https://randomuser.me/api/portraits/men/15.jpg",
      "Preview"
    )}
  />
);

storiesOf("Preview", module).add("default", PreviewDefault);
