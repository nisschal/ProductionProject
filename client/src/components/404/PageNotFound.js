/** @format */

import React from 'react';
import './PageNotFound.module.css';
import { Link } from 'react-router-dom';

// this component is for displaying page not found message
export default function PageNotFound(props) {
    // let location = useLocation();
    return (
        <div className='page-error'>
            <div className='mainbox'>
                <div className='err'>4</div>
                <i className='far fa-question-circle fa-spin' />
                <div className='err2'>4</div>
                <div className='msg'>
                    Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed
                    in the first place?
                    <p>
                        Let's go <Link to='/'>home</Link> and try from there.
                    </p>
                </div>
            </div>
        </div>
    );
}
