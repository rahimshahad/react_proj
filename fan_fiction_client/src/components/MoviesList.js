import React from 'react'
import {connect} from 'react-redux'
import { Button } from '../styled-components/Button.style'

  const MoviesList = ({movies}) => {
    return (
        <div>
            <h1>List of Movies:</h1>
            {movies.map(movie =>
            <ul key={movie.id}><li>
                {movie.title} - {movie.plot} - {movie.setting} - {movie.genre}
                <Button > Edit Movie </Button>
                <Button > Delete Movie </Button>
                </li>
                </ul>
                )}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return { movies: state.movies}
}

export default connect(mapStateToProps)(MoviesList);