
import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import MsgAlert from "../MsgAlert";

export const MsgAlertDefault: React.FC = () => (
    <MsgAlert>
        {text("Texto", "Hoje")}
    </MsgAlert>
);

storiesOf("Message Alert", module).add("default", MsgAlertDefault);

export type { MsgAlertProps } from "../MsgAlert";
