import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Message from "./components/message";
import Date from "./components/date";

export default () => {
    const users = useSelector(state => state.users)
    const clients = useSelector(state => state.clients)
    const selected = useSelector(state => state.internal.selected)

    const user = users.get(selected)
    const client = clients.get(selected)

    let currentMessages = []

    if (client && client.messages) currentMessages = [...client.messages.order()];
    if (user && user.messages) currentMessages = [...user.messages.order()];

    return currentMessages.reverse().map((message, index) => {
        const nextMessage = currentMessages[index + 1];
        const funcionario = message.to && users.get(message.from)
        return (
            <Fragment key={message.createdAt}>
                <Message funcionario={funcionario} message={message} />
                <Date message={message} nextMessage={nextMessage} />
            </Fragment>
        );
    })
}