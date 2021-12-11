import React from 'react'
import {NavLink as Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <Nav>   
            <NavLink to='/'>
                <h1>FAN FICTION</h1>
            </NavLink>
            <NavMenu>
                <NavLink exact to ='/'>Home</NavLink>
                <NavLink exact to ='/movies'>Movies</NavLink>
                <NavLink exact to ='/about'>About</NavLink>
                <NavLink exact to ='/reviews'>Reviews</NavLink>

            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar
