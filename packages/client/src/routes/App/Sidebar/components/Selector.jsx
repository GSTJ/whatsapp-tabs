import React, { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { faUsers, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Selector } from "components";
import { Actions } from "ducks";

export default () => {
    const dispatch = useDispatch()
    const toggle = useSelector(state => state.internal.toggle)
    const handleClick = useCallback(value => dispatch(Actions.setToggle(value)), [dispatch])

    return (
        <Selector onClick={handleClick} selecionado={toggle} icons={[
            <FontAwesomeIcon color="white" icon={faUsers} />,
            <FontAwesomeIcon color="white" icon={faIdCard} />
        ]} />
    );
}
