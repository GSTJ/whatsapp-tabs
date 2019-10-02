import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import MsgAlert from "../msgAlert";


export const MsgAlertDefault = () => (
    <MsgAlert>
        {text("Texto", "Hoje")}
    </MsgAlert>
);

storiesOf("Message Alert", module).add("default", MsgAlertDefault);
