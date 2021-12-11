import React from 'react'
import {NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>  
            {/* <NavLink to='/'>
                <h1>FAN FICTION</h1>
            </NavLink> */}
                <NavLink exact to ='/'>Home</NavLink>
                <NavLink exact to ='/movies'>Movies</NavLink>
                <NavLink exact to ='/about'>About</NavLink>
                <NavLink exact to ='/reviews'>Reviews</NavLink>

            
        </>
    )
}

export default Navbar
