import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchMovies} from '../actions/moviesActions'
import MoviesList from './MoviesList'


 class MoviesContainer extends Component {

    componentDidMount(){
        console.log("a")
        this.props.fetchMovies()
        console.log("b")
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