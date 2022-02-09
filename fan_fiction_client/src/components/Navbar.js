import React from 'react'
import { NavLink, NavMenu } from './styled-components/NavBar.style'

const Navbar = () => {
    return (
        <>  
            {/* <NavLink to='/'>
                <h1>FAN FICTION</h1>
            </NavLink> */}
            <NavMenu > 
                <NavLink exact to ='/'>Home</NavLink>
                <NavLink exact to ='/movies'>Movies</NavLink>
                <NavLink exact to ='/about'>About</NavLink>
                <NavLink exact to ='/movies/new'>New Movie</NavLink>
                </NavMenu>
            
        </>
    )
}

export default Navbar
