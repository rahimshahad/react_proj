import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addMovie } from '../actions/moviesActions'
import { Form, FormInput } from './styled-components/Form.style'

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
        this.props.addMovie(this.state)
        this.setState({
            title : '',
            plot : '',
            setting : '',
            genre : ''
        })
    }

    render() {
        return (
            <div>
               <Form onSubmit={this.handleSubmit} >
                   <label>Title:</label>
                   <FormInput type='text' value={this.state.title} name='title' onChange={this.handleChange}/>
                   <br/>
                   <label>Plot:</label>
                   <textarea value={this.state.plot} name='plot' onChange={this.handleChange}/>
                   <br/>
                   <label>Setting:</label>
                   <FormInput type='text' value={this.state.setting} name='setting' onChange={this.handleChange}/>
                   <br/>
                   <label>Genre:</label>
                   <FormInput type='text' value={this.state.genre} name='genre' onChange={this.handleChange}/>
                   <br/>
                   <FormInput type='submit' value='Create Movie' />
               </Form>
            </div>
        )
    }
}

export default connect(null,{addMovie})(MoviesForm)