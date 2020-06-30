/** @format */

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth from '../Auth/auth';
function Navbar({ userType, history }) {
    // jsx variable for AddCourse link
    const AddCourse =
        userType === 'admin' ? (
            <li className='nav-item'>
                <Link to='/AddCourse' className='nav-link'>
                    AddCourse
                </Link>
            </li>
        ) : (
            ''
        );
    // executed when logout button clicked
    const logOut = () => {
        // e.preventDefault();
        localStorage.clear();
        auth.logout(() => history.push(`/`));
        // setUsertype('');
        history.push(`/`);
    };

    // jsx variable for  non-loggedin User
    const loginRegLink = (
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link to='/login' className='nav-link'>
                    Login
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/register' className='nav-link'>
                    Register
                </Link>
            </li>
        </ul>
    );
    // jsx variable for  loggedin User

    const userLink = (
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link to='/profile' className='nav-link'>
                    User
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/about' className='nav-link'>
                    About
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/courses' className='nav-link'>
                    Courses
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/contact' className='nav-link'>
                    Contact
                </Link>
            </li>
            <li className='nav-item'>
                <a href='' onClick={() => logOut()} className='nav-link'>
                    Logout
                </a>
            </li>
        </ul>
    );
    return (
        <div className='header'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded'>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarsExample10'
                    aria-controls='navbarsExample10'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>

                <div
                    className='collapse navbar-collapse justify-content-md-center'
                    id='navbarsExample10'
                >
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>
                                Home
                            </Link>
                        </li>
                        {AddCourse}
                    </ul>
                    {/* if localStorage.usertoken is not null or undefine userlink variable is used other loginRegLink variable is used */}
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navbar);
