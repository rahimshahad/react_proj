import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchMovies} from '../actions/moviesActions'
import MoviesList from './MoviesList'


 class MoviesContainer extends Component {

    componentDidMount(){
        this.props.fetchMovies()
    }
    render(){
    return (
        <div> 
           {/* <MoviesForm /> */}
           <MoviesList />
        </div>
    )
    }
}

export default connect(null,{fetchMovies})(MoviesContainer)