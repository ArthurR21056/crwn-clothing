import React from 'react'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUP from '../../components/sign-up/sign-up.component'


import './signin.styles.scss'

const SignInPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn></SignIn>
        <SignUP></SignUP>
    </div>
    
);

export default SignInPage 