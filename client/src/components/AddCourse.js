/** @format */

import React, { Component } from 'react';
import { register } from './CourseFunction';

export default class AddCourse extends Component {
    constructor(props) {
        super(props);
        // its default state of addcourse form
        this.state = {
            title: '',
            description: '',
            url: '',
            category: '',
        };
        // binding function to this object
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    // the onSubmit function is called when form is submit
    onSubmit(e) {
        // to prevent multiple submit action
        e.preventDefault();
        // destructuring state object
        const { title, description, url, category } = this.state;
        // checking if title, description, url, category is empty or not
        if (!title) {
            alert('Title is Required');
            return;
        }
        if (!description || description.length < 50) {
            alert('decription is Required and length should be at least 50 char ');
            return;
        }
        if (!url) {
            alert('Courses URL is Required');
            return;
        }
        if (!category) {
            alert('Category is Required');
            return;
        }
        try {
            // extracking youtube video code from given url
            // eslint-disable-next-line
            const rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
            // grabbing the video code
            const youtubeUrlId = url.match(rx);

            // console.log('url', youtubeUrlId);
            // checking if url id is valid or not
            if (!youtubeUrlId) return alert('Youtube Video URL Invalid');
            // making object of course
            const course = {
                title,
                description,
                url: youtubeUrlId[1],
                category,
            };
            // console.log(url.split('/')[3]);
            // calling register function from CourseFunction.js file
            register(course)
                .then((res) => {
                    // console.log(res);
                    // after register check if registeration is success or not
                    if (!res.status === 200) return;
                    this.props.history.push(`/courses`);
                })
                .catch((error) => console.log(error)); //catching error while registering
        } catch (error) {
            // catching error if try block throw errors
            console.log(error);
        }
    }
    // this. function id called when value of field changes
    onChange(e) {
        // e.target.name is the name of field , e.target.value is the value of the field
        this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state));
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className='h3 mb-3 font-weight-normal'>Fill up the Form</h1>
                            <div className='form-group'>
                                <label htmlFor='title'> Course Title </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='title'
                                    placeholder='Course Title'
                                    value={this.state.title}
                                    onChange={this.onChange}
                                />
                                <p>
                                    <small>Course Title must be unique</small>
                                </p>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='description'>description</label>
                                <textarea
                                    className='form-control'
                                    name='description'
                                    placeholder='Course description'
                                    value={this.state.description}
                                    onChange={this.onChange}
                                />
                                <p>
                                    <small> Write at least 50 charecter </small>
                                </p>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='category'>category</label>
                                <select
                                    className='form-control'
                                    name='category'
                                    placeholder='Course description'
                                    value={this.state.category}
                                    onChange={this.onChange}
                                >
                                    <option value=''>Select Category</option>
                                    <option value='Professional'>Professional</option>
                                    <option value='Academic'>Academic</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='url'>Course Url</label>
                                <input
                                    type='textarea'
                                    className='form-control'
                                    name='url'
                                    placeholder='Course url'
                                    value={this.state.url}
                                    onChange={this.onChange}
                                />
                                <p>
                                    <small>
                                        copy youtube video url using mouse right click and paste
                                        here
                                    </small>
                                </p>
                            </div>
                            <button type='submit' className='btn btn-lg btn-primary btn-block'>
                                Save Course
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
