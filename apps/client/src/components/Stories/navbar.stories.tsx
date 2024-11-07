
import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Navbar from "../Navbar";

interface NavbarProps {
  id: number;
  height: number;
  onShare: () => void;
  name: string;
  defaultText: string;
}

storiesOf("Navbar", module).add("default", () => (
  <Navbar
    id={1234}
    height={number("Altura", 70)}
    onShare={action("Share")}
    name={text("Nome", "Gabriel")}
    defaultText={text("Default", "+5516123456789")}
  />
));

export type { NavbarProps };
