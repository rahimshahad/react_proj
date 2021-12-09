import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchMovies} from '../actions/moviesActions'
 class MoviesContainer extends Component {

    componentDidMount(){
        this.props.fetchMovies()
    }
    render(){
    return (
        <div>
           Movies Container 
        </div>
    )
    }
}

export default connect(null,{fetchMovies})(MoviesContainer)