import React, { Component } from 'react'
import {editMovie} from '../actions/moviesActions'
import {connect} from 'react-redux'
 class EditMovieForm extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(null, {editMovie})(EditMovieForm)