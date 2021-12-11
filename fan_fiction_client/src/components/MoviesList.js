import React from 'react'
import {connect} from 'react-redux'
import { Button } from '../styled-components/Button.style'
import { deleteMovie } from '../actions/moviesActions'
  const MoviesList = ({movies, deleteMovie}) => {

   const handleSubmit = (e, movieID) =>{
        deleteMovie(movieID)
        console.log('movieID', movieID)
        
    }
    return (
        <div>
            <h1>List of Movies:</h1>
            {movies.map(movie =>
            <ul key={movie.id}><li>
                {movie.title} - {movie.plot} - {movie.setting} - {movie.genre}
                <Button > Edit Movie </Button>
                <Button onClick={(e) => handleSubmit(e, movie.id)}> Delete Movie </Button>
                </li>
                </ul>
                )}
        </div>
    )
}



const mapStateToProps = (state) =>{
    return { movies: state.movies}
}

export default connect(mapStateToProps, {deleteMovie})(MoviesList);