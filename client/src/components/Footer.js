/** @format */

import React, { Component } from 'react';
import logo from '../assest/images/logo.png';
class Footer extends Component {
    render() {
        return (
            <footer className='footer bg-light'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-lg-4 pr-4'>
                            <div className='footer_logo pb-2'>
                                <a href='../index/index.html'>
                                    <img src={logo} height='120px' width='180px' alt='EduNepal' />
                                </a>
                            </div>
                            <div className='footer_info'>
                                <p>
                                    EduNepal is an e-learning hub where you can get different kinds
                                    of courses both professional and academic.
                                </p>
                                {/*<a href="#" class=" social_icons fa fa-facebook"></a>
            <a href="#" class=" social_icons fa fa-twitter"></a>
            <a href="#" class="social_icons fa fa-instagram"></a>
            <a href="#" class="social_icons fa fa-linkedin"></a>*/}
                            </div>
                        </div>
                        <div className='col-lg-4' align='center'>
                            <h5 className='pb-4'>Category</h5>
                            <ul className='footer_links px-3'>
                                <li>professional</li>
                                <li>Academic</li>
                            </ul>
                        </div>
                        {/* Footer MEssage Form start */}
                        <div className='col-lg-4'>
                            <iframe
                                title='embedeiframe'
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.813548523007!2d85.31735021548187!3d27.69215703276521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b19295555f%3A0xabfe5f4b310f97de!2sThe%20British%20College%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1593149748094!5m2!1sen!2snp'
                                frameBorder={0}
                                style={{ border: 0 }}
                                allowFullScreen
                                aria-hidden='false'
                                tabIndex={0}
                            />
                            <p>
                                <i
                                    className='material-icons text-warning'
                                    style={{ fontSize: '14px' }}
                                >
                                    location_on
                                </i>{' '}
                                Thapathali, Kathmandu
                            </p>
                            <p>
                                <i
                                    className='material-icons text-warning'
                                    style={{ fontSize: '14px' }}
                                >
                                    phone
                                </i>{' '}
                                +977 01-4114215
                            </p>
                            <p>
                                <i
                                    className='material-icons text-warning'
                                    style={{ fontSize: '14px' }}
                                >
                                    mail_outline
                                </i>{' '}
                                business@edunepal.org
                            </p>
                        </div>
                    </div>
                </div>
                {/* Copyright Section */}
                <section className='copyright text-white bg-secondary'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 lastfooter'>
                                <p className='mb-0'>Copyright 2020, All Rights Reserved</p>
                            </div>
                            <div className='col-lg-6 lastfooter'>
                                {' '}
                                Designed by{' '}
                                <a className='text-white' rel='nofollow'>
                                    Nischal Gyawali
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        );
    }
}

export default Footer;
