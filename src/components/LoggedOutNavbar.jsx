import React from 'react'

// import {Link} from 'react-router-dom'
import {Nav, NavLink, NavLinks, Logo} from './styles/App'

export function LoggedOutNavbar() {
    return (
        <Nav>
            <Logo>
                <h1>Logo</h1>
            </Logo>
            <NavLinks>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">How It Works</NavLink>
                <NavLink to="/login">Sign In</NavLink>
                <NavLink to="/sign-up">Sign Up</NavLink>
            </NavLinks>
        </Nav>
    )
}
