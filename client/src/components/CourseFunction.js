/** @format */

import axios from 'axios';
// this CourseFunction.js is a file which contains all the function which request to server like post, get request.
// this register function perform post request with newCourse data.
export const register = (newCourse) => {
    return axios
        .post('http://localhost:5000/courses/add', newCourse)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error.response.data);
            // if error occures it call alertfunction
            alert(error.response.data.error);
            return error;
        });
};

// this getCourses function perofrm get Request to server to all the course in the database
export const getCourses = () => {
    return axios
        .get('http://localhost:5000/courses/all', {
            headers: { Authorization: ` ${localStorage.usertoken}` },
        })
        .then((response) => {
            // console.log(response);
            // if error occures it throw error
            if (response.data.error) throw response.data.error;
            return response.data;
        })
        .catch((err) => {
            // if error occures it call alertfunction

            alert(err.response.data.error);
            console.log(err.response.data);
        });
};
// this function also perform get request to server but with id as data in order to get specific course.
export const getCourse = (id) => {
    return axios
        .get(`http://localhost:5000/courses/${id}`, {
            headers: { Authorization: ` ${localStorage.usertoken}` },
        })
        .then((response) => {
            // console.log(response);
            // if error occures then throw error
            if (response.data.error) throw response.data.error;
            return response.data;
        })
        .catch((err) => {
            // if error occures it call alert function

            alert(err);
            console.log(err.response.data);
        });
};
