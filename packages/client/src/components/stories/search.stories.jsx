import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import Search from "../search";

export const TextField = () => (
  <Search placeholder={text("Placeholder", "Pesquisar conversa.", "Search")} />
);
storiesOf("Search", module).add("default", TextField);
