import React from 'react';
import './signin-signup.styles.scss';
import Signin from '../../components/signin/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () => {
    return(
        <div className='signin-and-signup'>
            <Signin/>
            <SignUp/>
        </div>
    );
}

export default SignInAndSignUp;