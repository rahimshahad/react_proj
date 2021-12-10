import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addMovie } from '../actions/moviesActions'

 class MoviesForm extends Component {
    state ={
        title: '',
        plot: '',
        setting: '',
        genre: ''
    }

    handleChange = (e) =>{
        const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addMovie(state)
    }

    render() {
        return (
            <div>
               <form onSubmit={handleSubmit} >
                   <label>Title:</label>
                   <input type='text' value={this.state.title} name='title' onChange={this.handleChange}/>
                   <br/>
                   <label>Plot:</label>
                   <textarea value={this.state.plot} name='plot' onChange={this.handleChange}/>
                   <br/>
                   <label>Setting:</label>
                   <input type='text' value={this.state.setting} name='setting' onChange={this.handleChange}/>
                   <br/>
                   <label>Genre:</label>
                   <input type='text' value={this.state.genre} name='genre' onChange={this.handleChange}/>
                   <br/>
                   <input type='submit' value='Create Movie' />
               </form>
            </div>
        )
    }
}

export default connect(null,{addMovie})(MoviesForm)