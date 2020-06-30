/** @format */

import axios from 'axios';
import jwt_decode from 'jwt-decode';

// this file is used for performing request to server for post and get method.

// register function is used for post method to add data to database
// 'users/register' is first parametr which specify the api url and second parameter for data
export const register = (newUser) => {
    return axios
        .post('users/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
        })
        .then((response) => {
            if (response.status === 200) console.log('Registered');
        })
        .catch((error) => console.log(error.response.data));
};

// this function is used for login it for request server with some data and server reponse with some data or error mesg
export const login = (user) => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password,
        })
        .then((response) => {
            const decoded = jwt_decode(response.data);
            const data = {
                first_name: decoded.first_name,
                last_name: decoded.last_name,
                email: decoded.email,
                Usertype: decoded.Usertype,
            };
            //to store localstorage
            const serializedData = JSON.stringify(data);
            localStorage.setItem('usertoken', response.data);
            localStorage.setItem('user', serializedData);
            return response.data;
        })
        .catch((err) => {
            console.log(err.response.data);
        });
};

// this function to get user data with header as a authoraization
export const getProfile = (user) => {
    return axios
        .get('users/profile', {
            headers: { Authorization: ` ${this.getToken('usertoken')}` },
        })
        .then((response) => {
            // console.log(response);
            return response.data;
        })
        .catch((err) => {
            console.log(err.response.data);
        });
};
