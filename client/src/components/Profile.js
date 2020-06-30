/** @format */

import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            Usertype: '',
            errors: {},
        };
    }

    componentDidMount() {
        // parssing or converting LocalStorage.user to JSON
        const user = JSON.parse(localStorage.user);
// add user data to state
        this.setState(() => ({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            Usertype: user.Usertype,
        }));
    }

    render() {
        return (
            <div className='container'>
                <div className='jumbotron mt-5'>
                    <div className='col-sm-8 mx-auto'>
                        <h1 className='text-center'>PROFILE</h1>
                    </div>
                    <table className='table col-md-6 mx-auto'>
                        <tbody>
                            <tr>
                                <td>Fist Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>Usertype</td>
                                <td>{this.state.Usertype}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Profile;
