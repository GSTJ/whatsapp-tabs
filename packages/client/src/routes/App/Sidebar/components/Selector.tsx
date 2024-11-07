import React, { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { faUsers, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Selector } from "components";
import { Actions } from "ducks";

export interface ToggleProps {
    onClick: (value: boolean) => void;
    selecionado: boolean;
    icons: JSX.Element[];
}

const ToggleComponent: React.FC<ToggleProps> = ({ onClick, selecionado, icons }) => {
    const dispatch = useDispatch();
    const toggle = useSelector((state: any) => state.internal.toggle);
    const handleClick = useCallback((value: boolean) => dispatch(Actions.setToggle(value)), [dispatch]);

    return (
        <Selector onClick={handleClick} selecionado={toggle} icons={icons} />
    );
}

export default ToggleComponent;