import React, {Component} from "react";
import {Form, FormInput} from "../styled-components/Form.style"

export default class SignUp extends Component{

    state= {
        username: "",
        password: ""
    }

    handleChange =(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <FormInput name='username' value={this.state.username} onChange={this.handleChange} />
                    <br/> 
                    <label>Password:</label>
                    <FormInput name='password' type='password' />
                    <br/>
                    <FormInput type='submit' value='Sign Up' />

                </Form>
            </div>
        )
    }
};
