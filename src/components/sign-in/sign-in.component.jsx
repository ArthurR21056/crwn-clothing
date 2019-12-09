import React from 'react'

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import './sign-in.styles.scss'

import { signInWithGoogle } from '../../firebase/firebase.utils'
class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: "", password: ""})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        label="Email"
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        required/>
                    <FormInput 
                        label="Password"
                        name='password' 
                        type='password' 
                        handleChange={this.handleChange}
                        value={this.state.password} 
                        required/>
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton 
                        onClick={signInWithGoogle}
                        style={{
                            backGroundcolor: 'blue'
                        }}>Sign in with Google </CustomButton>
                </form>

            </div>
        )
    }
}

export default SignIn 