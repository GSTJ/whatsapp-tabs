import React from "react"
import { Conversations, Search, Selector, Profile } from "./components"
import { Sidebar } from "./styles"

export default () => (
    <Sidebar>
        <Profile />
        <Selector />
        <Search />
        <Conversations />
    </Sidebar>
);
