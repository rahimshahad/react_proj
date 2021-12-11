import React, {Component} from "react";
import {Form, FormInput} from "../styled-components/Form.style"

export default class SignUp extends Component{

    state= {
        username: "",
        password: ""
    }

    render(){
        return(
            <div>
                <Form >
                    <label>Username:</label>
                    <FormInput name='username' value={this.state.username} />
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
