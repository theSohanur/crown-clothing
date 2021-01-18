import React, { Component } from 'react';
import './signIn.styles.scss';



class SIgnIn extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email:'', password:''})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <from inSubmit = {} >
                    <input type="email" name='email' value={this.state.email} required />
                    <label>Email</label>
                    <input type="password" name='password' value={this.state.password} required />
                    <label>Password</label>
                    <input type="submit" value="Submit Form"/>
                </from>
                
            </div>
        )
    }
}

export default SIgnIn

