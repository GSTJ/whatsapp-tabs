import React, { useCallback } from "react";
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_CLIENT_MESSAGES, GET_USER_MESSAGES } from "graphql/requests"
import { Actions } from "ducks";
import { useSelector, useDispatch } from "react-redux";
import { Preview, Error } from "components";
import { Container } from "../../styles";

export default () => {
    const { internal, users, clients } = useSelector(state => state)
    const { profile, toggle, search, selected, lock } = internal
    const my = users.get(profile._id)

    const dispatch = useDispatch()

    const addClientMessages = useCallback(data => dispatch(Actions.addClientMessages(data.clientMessages)), [dispatch])
    const [getClientMessages] = useLazyQuery(GET_CLIENT_MESSAGES, { onCompleted: addClientMessages })

    const addUserMessages = useCallback(data => dispatch(Actions.addUserMessages(data.userMessages)), [dispatch])
    const [getUserMessages] = useLazyQuery(GET_USER_MESSAGES, { onCompleted: addUserMessages })


    const searchFilter = useCallback(client => {
        if (profile._id === client._id) return false; // Remove yourself from the list.
        const { number, name, lastMessage } = client
        let filter;
        if (name) filter = name.includes(search)
        if (number) filter = filter || number.includes(search)
        if (lastMessage) filter = filter || lastMessage.body.includes(search)
        return filter
    }, [profile._id, search])

    const filterLock = useCallback(client => {
        // Workaround
        let owned = false
        users.forEach(user => {
            if (user._id !== profile._id && user.conversations.includes(client._id)) owned = true
        })
        if (!owned || lock) return true
        return my && my.conversations.includes(client._id)
    }, [lock, my, profile._id, users])

    const loadMessages = useCallback(target => {
        dispatch(Actions.setSelected(target._id))
        if (clients.get(target._id) && target.firstLoad) return getClientMessages({ variables: { clientID: target._id } })
        if (users.get(target._id) && target.firstLoad) return getUserMessages({ variables: { userID: target._id } })
        console.error("Target does not exist")
    }, [clients, dispatch, getClientMessages, getUserMessages, users])

    const hasConversations = clients && clients.size !== 0

    return (
        <Container>{
            !hasConversations ?
                <Error type="alert">Nenhuma conversa em andamento.</Error> :
                (toggle ? [...users.values()] : [...clients.values()].filter(filterLock)).filter(searchFilter).map(target => {
                    const { body, createdAt, status, to } = target.messages && target.messages.order()[0] || target.lastMessage || {}

                    return <Preview
                        client={target}
                        self={!!to}
                        message={body}
                        status={status}
                        selected={selected === target._id}
                        date={new Date(createdAt) || Date.now()}
                        onClick={loadMessages}
                        id={target._id}
                        key={target._id}
                    />
                })
        }</Container>
    )
}