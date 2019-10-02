import React, { useState, useCallback } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatPhoneNumber } from 'react-phone-number-input'
import { useMutation } from '@apollo/react-hooks';
import { FOWARD_CLIENT } from "graphql/requests"
import { Actions } from "ducks";
import { useSelector, useDispatch } from "react-redux";
import { Search } from "components";
import { Focus } from "global_styles"
import { Foward, Profile, Container, Header, Close, Title } from "./styles"

export default () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState("");

  const { users, clients, internal } = useSelector(state => state)
  const { profile, selected, foward } = internal
  const client = clients.get(selected) || {}

  const [fowardClient] = useMutation(FOWARD_CLIENT)

  const filter = useCallback(user => profile._id !== user._id && (user.name.includes(search) || user.email.includes(search)), [profile._id, search])
  const handleChange = useCallback(obj => setSearch(obj.target.value), [setSearch])

  const close = useCallback(() => dispatch(Actions.setFoward("")), [dispatch])
  const set = useCallback(user => {
    if (user.status !== "online") return false;
    fowardClient({ variables: { client: selected, to: user._id } })
    return close()
  }, [close, fowardClient, selected])

  return (
    <Focus open={foward}>
      <Foward>
        <Header>
          <Title>Encaminhar <span>{client.name || formatPhoneNumber(client.number) || "undefined"}</span> para:</Title>
          <Close size={40} onClick={close}>
            <FontAwesomeIcon icon={faTimes} />
          </Close>
        </Header>
        <Search value={search} onChange={handleChange} placeholder="Procurar usuário." />
        <Container>
          {[...users.values()].filter(filter).map(user => <Profile {...user} onClick={() => set(user)} key={user._id} />)}
        </Container>
      </Foward>
    </Focus>
  );
}

