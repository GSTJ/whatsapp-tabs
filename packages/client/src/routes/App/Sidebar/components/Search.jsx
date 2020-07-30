import React, { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "ducks";
import { Search } from "components";

export default () => {
    const dispatch = useDispatch()
    const toggle = useSelector(state => state.internal.toggle)
    const search = useSelector(state => state.internal.search)
    const lock = useSelector(state => state.internal.lock)
    const handleChange = useCallback(({ target }) => dispatch(Actions.setSearch(target.value)), [dispatch])

    return (
        <Search
            lock={!toggle}
            value={search}
            toggle={lock}
            onChange={handleChange}
            onToggle={() => dispatch(Actions.setLock(!lock))}
            placeholder="Procurar conversa." />
    );
}