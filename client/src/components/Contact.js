/** @format */

import React, { Component } from 'react';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        // default state for contact
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    // this function is triggered when submit button is presses
    // this function will open default mail app.
    onSubmit(e) {
        // to prevent multiple submit action

        e.preventDefault();
        const { name, email, phone, message } = this.state;
        const mailBody = `${message}\n\n
        Phone Number: ${phone}\n\n
        intrested User: ${name}`;
        console.log(mailBody);
        window.location = `mailto:${email}?subject=${name}&body=${mailBody}`;
    }

    // this. function id called when value of field changes
    onChange(e) {
        // e.target.name is the name of field , e.target.value is the value of the field
        this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state));
    }
    render() {
        return (
            <div className='bb_contact'>
                <div className='contact-pageheader'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='contact-caption'>
                                    <h1 className='contact-title'>Get In Touch with us</h1>

                                    <p className='contact-text'>
                                        Here is a few approaches to get in touch with me. It would
                                        be ideal if you send an email, fill the contact form{' '}
                                        <strong>I'm looking forward to speaking with you.</strong>
                                    </p>
                                </div>
                            </div>
                            <div className='col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12'>
                                <div className='contact-form'>
                                    <h3 className='contact-info-title'>Contact Us</h3>
                                    <div className='row'>
                                        <form className='w-100'>
                                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                                <div className='form-group'>
                                                    <label
                                                        className='control-label sr-only '
                                                        htmlFor='Name'
                                                    />
                                                    <input
                                                        id='name'
                                                        type='text'
                                                        name='name'
                                                        placeholder='Name'
                                                        value={this.state.name}
                                                        onChange={this.onChange}
                                                        className='form-control'
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                                <div className='form-group'>
                                                    <label
                                                        className='control-label sr-only '
                                                        htmlFor='email'
                                                    />
                                                    <input
                                                        id='email'
                                                        type='text'
                                                        placeholder='Email'
                                                        name='email'
                                                        value={this.state.email}
                                                        onChange={this.onChange}
                                                        className='form-control'
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                                <div className='form-group'>
                                                    <label
                                                        className='control-label sr-only '
                                                        htmlFor='Phone'
                                                    />
                                                    <input
                                                        id='phone'
                                                        type='text'
                                                        placeholder='Phone'
                                                        name='phone'
                                                        className='form-control'
                                                        value={this.state.phone}
                                                        onChange={this.onChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20'>
                                                <div className='form-group'>
                                                    <label
                                                        className='control-label sr-only'
                                                        htmlFor='textarea'
                                                    />
                                                    <textarea
                                                        className='form-control pdt20 '
                                                        id='textarea'
                                                        name='message'
                                                        rows={4}
                                                        value={this.state.message}
                                                        onChange={this.onChange}
                                                        placeholder='Message'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-12 col-md-12 col-sm-6 col-xs-12'>
                                                <button
                                                    className='border30 btn btn-warning text-white btn-lg '
                                                    onClick={this.onSubmit}
                                                >
                                                    Send
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='space-medium'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 mb60'>
                                <hr />
                            </div>
                        </div>
                        <div className='row justify-content-around'>
                            <div className='col-lg-5 col-md-5 col-sm-6 col-xs-12'>
                                <div id='contact-map'>
                                    <iframe
                                        title='conatct'
                                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8135485230064!2d85.31735021548187!3d27.692157032765223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b19295555f%3A0xabfe5f4b310f97de!2sThe%20British%20College%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1593153604142!5m2!1sen!2snp'
                                        height='450px'
                                        width='500px'
                                        frameBorder={0}
                                    />
                                </div>
                            </div>
                            <div className='col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-6 col-xs-12'>
                                <div>
                                    <h3 className='title-bold'>Contact Info</h3>
                                    <p>
                                        Please help us serve you better by sharing the following
                                        information.
                                    </p>
                                </div>
                                <div className='contact-section'>
                                    <div className='contact-icon'>
                                        {/* <i className='fa fa-map-marker' /> */}
                                    </div>
                                    <div className='contact-info'>
                                        <p>Thapathali, Kathmandu </p>
                                    </div>
                                </div>
                                <div className='contact-section'>
                                    <div className='contact-icon'>
                                        {/* <i className='fa fa-phone' /> */}
                                    </div>
                                    <div className='contact-info'>
                                        <p>+977 01-4114215</p>
                                    </div>
                                </div>
                                <div className='contact-section'>
                                    <div className='contact-icon'>
                                        {/* <i className='fa fa-envelope' /> */}
                                    </div>
                                    <div className='contact-info'>
                                        <p>contactedunepal@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
