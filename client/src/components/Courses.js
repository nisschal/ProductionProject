/** @format */

import React, { Component } from 'react';
import Pagination from './Pagination';
import { getCourses } from './CourseFunction';
import UUID from 'uuid-generate';
import { Link } from 'react-router-dom';

class Courses extends Component {
    constructor(props) {
        super(props);
        // Default state for pagination and courses
        this.state = {
            currentPage: 1,
            postPerPage: 3,
            courses: [],
        };
        // paginate function bind to this object
        this.paginate = this.paginate.bind(this);
    }

    // calls when element is render in browser
    componentDidMount() {
        // this.function request to server to get all course which is imported from Course function.
        getCourses().then(({ courses }) => {
            // console.log('Got data', courses);
            // adding courses to state
            return this.setState(
                () => ({ courses: courses }),
                () => console.log(this.state.courses)
            );
        });
    }
    // pagenate function to set current page
    paginate = (pageNumber) => this.setState((prevState) => ({ currentPage: pageNumber }));
    render() {
        // initilization of posts
        const posts = [...this.state.courses];
        // destructuring state object
        const { currentPage, postPerPage } = this.state;
        // initilization of indexOfLastPost, indexOfFirstPost, currentPosts
        const indexOfLastPost = currentPage * postPerPage;
        const indexOfFirstPost = indexOfLastPost - postPerPage;
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
        return (
            <div>
                {/*Brand Head Description*/}
                <div className='brand_head my-4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h2 className='text-center font-weight-bold'>
                                    Our<span className='text-warning'>Courses</span>
                                </h2>
                                <div className='pc_underline mb-4' />
                            </div>
                        </div>
                    </div>
                </div>
                {/*Brand Head Description END*/}
                <section className='blog_area'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='blog_left_sidebar'>
                                    <section className='featured-posts no-padding-top'>
                                        <div className='container'>
                                            {/* Post*/}
                                            {currentPosts.map((post) => (
                                                <div
                                                    key={UUID.generate()}
                                                    className='row shadow-sm mb-3'
                                                >
                                                    <div
                                                        className='p-3 col-md-5 col-lg-3'
                                                        // align='center'
                                                    >
                                                        <div className='iframe-container'>
                                                            <iframe
                                                                title={`video/${post.url}`}
                                                                width='340'
                                                                height='360'
                                                                src={`https://www.youtube.com/embed/${post.url}`}
                                                                frameBorder='0'
                                                                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                                                                allowFullScreen
                                                            ></iframe>
                                                        </div>
                                                    </div>
                                                    <div className='text col-md-6  mt-4'>
                                                        <div className='text-inner'>
                                                            <div className='content'>
                                                                <header className='post-header'>
                                                                    <div className='category' />
                                                                    <p>
                                                                        {' '}
                                                                        {post.category}
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;
                                                                        {new Date(
                                                                            post.date
                                                                        ).toDateString()}
                                                                    </p>
                                                                    <h4>{post.title}</h4>
                                                                    <p>{post.description}</p>
                                                                </header>
                                                                <div className='text-center col-sm-6 mb-3'>
                                                                    <Link
                                                                        to={`/courseDetails/${post._id}`}
                                                                        type='button'
                                                                        className='btn btn-warning bg_theme btn-rounded w-100'
                                                                    >
                                                                        Learn More
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <Pagination
                                                postPerPage={postPerPage}
                                                totalPost={posts.length}
                                                paginate={this.paginate}
                                            />
                                            <hr />
                                            {/*End of Post*/}
                                        </div>
                                    </section>
                                    <div className='row'>
                                        <div className='col-md-6'></div>
                                        <div className='col-md-6'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Courses;
