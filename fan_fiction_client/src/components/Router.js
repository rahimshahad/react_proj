import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../components/Home'
import MoviesList from './MoviesList'
import MoviesForm from './MoviesForm'
import About from './About'
import MoviesContainer from './MoviesContainer'
import SignUp from './SignUpForm'
import EditMovieForm from './EditMovieForm'
export default function Router() {
    return (
       <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/about' component={About} />
           <Route exact path='/movies' component={MoviesContainer} />
           <Route exact path='/movies/new' component={MoviesForm} />
           <Route exact path='/movies/:id/edit' component={EditMovieForm} />
           <Route exact path='/signup' component={SignUp} />
       </Switch>
    )
}
