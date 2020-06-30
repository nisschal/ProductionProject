/** @format */

import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../Auth/auth';
import { getCourses } from './CourseFunction';

// react-multi-carousel is a library that we used here to created carousel
export default class CardCarousel extends Component {
    constructor(props) {
        super(props);
        // default state of courses
        this.state = {
            courses: [],
        };
    }
    // when elements renders this function is called
    componentDidMount() {
        // calling getCourses function which return the courses
        getCourses().then(({ courses }) => {
            //  set the state with new course which got from backend
            return this.setState(
                () => ({ courses: courses }),
                () => console.log(this.state.courses)
            );
        });
    }
    render() {
        // initializing posts
        const posts = [...this.state.courses];
        // defining the size and number of post to display in carousel
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        };
        return (
            <section>
                <div className='wrapper'>
                    <h3
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Our Courses
                    </h3>
                    <div className='pc_underline' />

                    <Carousel responsive={responsive}>
                        {/* if posts is emplty then nothing will show and if it is not then post will be showen  */}
                        {posts &&
                            posts.map((post) => (
                                <Col>
                                    <Card>
                                        <Card.Header>
                                            <div className='iframe-container'>
                                                <iframe
                                                    title={`video/${post.url}`}
                                                    width='340'
                                                    height='360'
                                                    src={`https://www.youtube.com/embed/${post.url}?rel=0`}
                                                    frameBorder='0'
                                                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <span>
                                                <b>{post.title}</b>
                                            </span>
                                            <p>{post.description}</p>
                                            {auth.isAuthenticated() && (
                                                <div className='text-right m-0'>
                                                    <Link
                                                        to={`/courseDetails/${post._id}`}
                                                        className='btn btn-warning bg_theme'
                                                    >
                                                        Read More
                                                    </Link>
                                                </div>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}

                        {/* </div> */}

                        {/* </div> */}
                    </Carousel>
                    {/* </div> */}
                    {/* row end */}
                </div>
            </section>
        );
    }
}
