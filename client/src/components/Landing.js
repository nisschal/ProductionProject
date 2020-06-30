/** @format */

import React, { Component } from 'react';
import about from '../assest/images/about.jpg';
import CardCarousel from './CardCarousel';
import BannerHead from './BannerHead';

// import { Card, Col } from 'react-bootstrap';
class Landing extends Component {
    render() {
        return (
            <div className='col-sm-12 mx-auto'>
                <BannerHead />
                {/*Banner Head Ends*/}
                {/*About Section*/}
                <section className='gi_intro py-5 bg-light'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 intro_pic '>
                                <img src={about} width='100%' height='auto' alt='about' />
                            </div>
                            <div className='col-lg-6 mt-2'>
                                <h3>
                                    {' '}
                                    <span>Learn More About EduNepal</span>
                                </h3>
                                <p>
                                    EduNepal is an e-learning hub where you can get different kinds
                                    of courses both professional and academic. Our goal is to learn
                                    the future generation of creative professionals for a future in
                                    any industry.
                                </p>
                                <div className='row'>
                                    <div className='col-sm-6 d-flex'>
                                        <i
                                            className='material-icons mr-3 icon_rounded'
                                            style={{ fontSize: '34px' }}
                                        >
                                            code
                                        </i>
                                        <h5 className='py-3'>Development</h5>
                                    </div>
                                    <div className='col-sm-6 d-flex'>
                                        <i
                                            className='material-icons mr-4 icon_rounded'
                                            style={{ fontSize: '34px' }}
                                        >
                                            laptop
                                        </i>
                                        <h5 className='py-3'>PC Management</h5>
                                    </div>
                                    <div className='w-100 py-3'></div>
                                    <div className='col-sm-6 d-flex'>
                                        <i
                                            className='material-icons mr-4 icon_rounded'
                                            style={{ fontSize: '34px' }}
                                        >
                                            language
                                        </i>
                                        <h5 className='py-3'>Language</h5>
                                    </div>
                                    <div className='col-sm-6 d-flex'>
                                        <i
                                            className='material-icons mr-4 icon_rounded'
                                            style={{ fontSize: '34px' }}
                                        >
                                            library_music
                                        </i>
                                        <h5 className='py-3'>Music</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End of About Section*/}
                {/*Popular Courses*/}
                <CardCarousel />
            </div>
        );
    }
}

export default Landing;
