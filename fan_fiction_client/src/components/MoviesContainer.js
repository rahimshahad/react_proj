import React from 'react'
import {connect} from 'react-redux'
import {fetchMovies} from '../actions/moviesActions'
 function MoviesContainer() {
    return (
        <div>
           Movies Container 
        </div>
    )
}

export default connect(null,{ fetchMovies})(MoviesContainer)