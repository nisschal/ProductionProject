/** @format */

import React from 'react';
// Pagination component which display the page number and execute the function which display the page.
const Pagination = ({ postPerPage, totalPost, paginate }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <nav className='Page navigation example'>
            <ul className='pagination justify-content-center'>
                {' '}
                {pageNumber.map((number) => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} className='page-link'>
                            {number}{' '}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
