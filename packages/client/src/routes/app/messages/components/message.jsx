/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import { Message } from "components";

function getEmbed(media, contentType) {
    if (contentType.includes("video")) return <video controls><source src={media} type={contentType} /></video>;
    if (contentType.includes("image")) return <img src={media} />;
    if (contentType.includes("pdf")) return <embed src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${media}`} />
    return null;
}

export default props => {
    const { message, funcionario } = props;
    const embed = getEmbed(message.media, message.contentType);
    return (
        <Message
            {...funcionario}
            {...message}
            embed={embed}
            self={!!message.to}
            date={new Date(message.createdAt)}
            key={message.createdAt}
        >
            {message.body}
        </Message>
    );
}