/** @format */

import React, { Component } from 'react';
import about from '../assest/images/about.jpg';
import CardCarousel from './CardCarousel';
class About extends Component {
    render() {
        return (
            <div>
                {/*Brand Head Description*/}
                <div className='brand_head my-4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h2 className='text-center font-weight-bold'>
                                    Edu<span className='text-warning'>Nepal</span>
                                </h2>
                                <div className='pc_underline mb-4' />
                            </div>
                        </div>
                    </div>
                </div>
                {/*About Section*/}
                <section className='gi_intro py-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 intro_pic '>
                                <img src={about} width='100%' height='auto' alt='about' />
                            </div>
                            <div className='col-lg-6 mt-2'>
                                <h2>Welcome to EduNepal</h2>
                                <p className='my-4'>
                                    EduNepal is an e-learning hub where you can get different kinds
                                    of courses both professional and academic. Our goal is to learn
                                    the future generation of creative professionals for a future in
                                    any industry.
                                </p>
                                <p>
                                    Our goal is to learn the future generation of creative
                                    professionals for a future in any industry and have a good
                                    approach of online learning in Nepal.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End of About Section*/}
                {/* its a component import to here */}
                <CardCarousel />
            </div>
        );
    }
}
export default About;
