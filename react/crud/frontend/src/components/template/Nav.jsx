import "./Nav.css"
import NavItem from "./NavItem"
import React from "react"


export default props => 
    <aside className="menu-area">
        <nav className="menu">
        <NavItem hash="/" icon="home" name="Inicio" />
        <NavItem hash="/users" icon="users" name="Usuarios" />
        </nav>
    </aside>