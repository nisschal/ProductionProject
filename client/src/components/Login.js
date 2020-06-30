/** @format */

import React, { Component } from 'react';
import { login } from './UserFunctions';
import auth from '../Auth/auth';
// import jwt_decode from 'jwt-decode';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
        };
        // binding below function to this object
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // called when form field value is changed
    onChange(e) {
        // e.target.name is the name of field , e.target.value is the value of the field
        this.setState({ [e.target.name]: e.target.value });
    }

    // function is called when login is button is pressed
    onSubmit(e) {
        e.preventDefault();
        // creating user object
        const user = {
            email: this.state.email,
            password: this.state.password,
        };
        // login is a function which is imported from UserFunction.js file
        login(user).then((res) => {
            if (res) {
                // loading data from Localstrorage
                const serializedData = JSON.parse(localStorage.user);
                // grabing Usertype variable from serializedData object using destructuring
                const { Usertype } = serializedData;
                // calling auth.login imported from auth.js
                auth.login(() => this.props.history.push('/profile'));
                // if usertype is admin then user is redirected to addCourse page
                if (Usertype === 'admin') {
                    this.props.history.push('/addCourse');
                } else this.props.history.push('/profile');
            }
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
                            <div className='form-group'>
                                <label htmlFor='email'>Email address</label>
                                <input
                                    type='email'
                                    className='form-control'
                                    name='email'
                                    placeholder='Enter email'
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <input
                                    type='password'
                                    className='form-control'
                                    name='password'
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type='submit' className='btn btn-lg btn-primary btn-block'>
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
