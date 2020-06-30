/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
// banner component
const BannerHead = () => {
    return (
        <section className='sectional sectional-1 text-left text-white'>
            <div className='container'>
                <div className='h-300p row'>
                    <div className='col-sm-6 col-lg-4 d-flex align-items-center'>
                        <div className='hero-zindex  px-2 py-2'>
                            <h1 style={{ color: '#000000' }}>Learn in your own convenience</h1>
                            <Link to='/contact' className=' btn btn-warning gi_active px-4 py-3'>
                                <h6 className='m-0'>Contact Us</h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerHead;
