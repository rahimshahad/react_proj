import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../components/Home'
import MoviesList from './MoviesList'
import MoviesForm from './MoviesForm'
import About from './About'

export default function Router() {
    return (
       <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/about' component={About} />
           <Route exact path='/movies' component={MoviesList} />
           <Route exact path='/movies/new' component={MoviesForm} />
       </Switch>
    )
}
