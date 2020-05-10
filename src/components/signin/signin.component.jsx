import React from 'react';
import './signin.styles.scss';
import FormInput from '../forminput/forminput.component';
import CustomButton from '../custom-button/custom-button.component';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            password: '',
        });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className='signin'>
                <h2>I already have an account</h2>
                <span className='title'>Sing in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange} 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        label='Email'
                        required 
                    />
                    <FormInput 
                        onChange={this.handleChange} 
                        name='password' 
                        value={this.state.password} 
                        type='password' 
                        label='Password'
                        required
                    />
                    <CustomButton type='submit'> Sign in </CustomButton>
                </form>
            </div>
        )
    }
}

export default Signin;