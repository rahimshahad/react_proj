import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addReview } from "../actions/moviesActions";
import { Form, FormInput } from '../styled-components/Form.style'

 class reviewForm extends Component {
    state = {
        content: ''
    }
    render() {
        return (
            <div>
               <Form>
                   <textarea value={this.state.content} name='content'/>
                   <FormInput value='Submit Review' type='submit'/>
                </Form> 
            </div>
        )
    }
}

export default connect (null, {addReview})(reviewForm)