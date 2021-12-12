import React, { Component } from 'react'
import {editMovie} from '../actions/moviesActions'
import {connect} from 'react-redux'
import { Form, FormInput } from '../styled-components/Form.style'
 class EditMovieForm extends Component {

    state = {
        title: this.props.title,
        plot: this.props.plot,
        setting: this.props.setting,
        genre: this.props.genre,
        // id: this.props.id
    }

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.editMovie(this.state)
        this.props.setShowEditForm(false)
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
                   <FormInput type='submit' value='Update Movie' />
               </Form>
            </div>
        )
    }
}

export default connect(null, {editMovie})(EditMovieForm)