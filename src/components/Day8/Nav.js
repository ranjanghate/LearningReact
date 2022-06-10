import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

    return (
    <nav>
        <NavLink style={navLinkStyles} to='/'> Home </NavLink>
        <NavLink style={navLinkStyles} to='/about'> About </NavLink>
        <NavLink style={navLinkStyles} to='/products'> Products </NavLink>
        <NavLink style={navLinkStyles} to='/users'> Users </NavLink>

    </nav>
  )
}
