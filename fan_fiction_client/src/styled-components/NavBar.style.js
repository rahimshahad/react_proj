import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const NavLink = styled(Link)`
    color: 00b4d8;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #15cdfc;
    }
`
export const NavMenu = styled.div`
    align-items: center;
    margin-right: 44%;
    font-weight: 800;

    @media screen and (max-width: 768) {
        display: none;
    }
`