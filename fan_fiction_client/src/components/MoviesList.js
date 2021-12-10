import React from 'react'
import {connect} from 'react-redux'

  function MoviesList({movies}) {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state =>{
    return { movies: state.movies}
}

export default connect(mapStateToProps)(MoviesList);