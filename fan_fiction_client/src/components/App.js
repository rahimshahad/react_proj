import React from 'react'
import Router from './Router'
import MoviesContainer from './MoviesContainer'
import Navbar from './Navbar'

export default function App() {
    return (
        <div>
            <Navbar />
            <MoviesContainer />
            <Router />
        </div>
    )
}
