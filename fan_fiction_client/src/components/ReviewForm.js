// import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import { addReview } from "../actions/moviesActions";
// import { Form, FormInput } from '../styled-components/Form.style'


//  class ReviewForm extends Component {
//     state = {
//         content: '',
//         movie_id: this.props.movie_id
//     }
//     handleChange = (e) => {
//         const {name, value} = e.target;

//         this.setState({
//             [name]: value
//         })
//     }
    
//     handleSubmit = (e) =>{
//         e.preventDefault();
//         this.props.addReview(this.state)
//         this.setState({
//             content: ""
//         })
//     }
//     render() {
//         return (
//             <div>
//                <Form onSubmit={this.handleSubmit}>
//                    <label> Review: </label>
//                    <textarea value={this.state.content} name='content' onChange={this.handleChange}/>
//                    <FormInput value='Submit Review' type='submit'/>
//                 </Form> 
//             </div>
//         )
//     }
// }

// export default connect (null, {addReview})(ReviewForm)