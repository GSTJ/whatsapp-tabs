import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";
import Profile from "../profile";

export const Online = () => (
  <Profile
    online={boolean("Online", true, "Profile")}
    name={text("Nome", "Gabriel", "Profile")}
    email={text("Email", "gabriel@microimport.com.br", "Profile")}
    picture={text(
      "Foto",
      "https://randomuser.me/api/portraits/men/15.jpg",
      "Profile"
    )}
  />
);

storiesOf("Profile", module).add("default", Online);
