import React from "react";
import { Send } from "./styles";

function SendWrapper(props) {
    const { onSend, ...rest } = props;
    return <Send {...rest} accept=".pdf,.png,.jpeg,.jpg,.mp4,.mp3" onSend={(body) => onSend({ body })} />;
}

export default SendWrapper;
