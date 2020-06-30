/** @format */

import React, { Component } from 'react';
import BannerHead from './BannerHead';
import { getCourse } from './CourseFunction';

export default class CourseDetails extends Component {
    constructor(props) {
        super(props);
        // default state of course
        this.state = {
            id: '',
            title: '',
            description: '',
            url: '',
            date: '',
            category: '',
        };
    }
    // this function is called when element is rendered in browser
    componentDidMount() {
        // grabbing the id of course from browser url
        const { id } = this.props.match.params;
        console.log('id:', id);
        // getCourse function request backend for specific course with id
        getCourse(id).then((course) => {
            // after having course from backend adding data to state object
            console.log('without setting state', course);
            return this.setState(
                () => ({
                    id: course._id,
                    title: course.title,
                    description: course.description,
                    url: course.url,
                    date: new Date(course.date).toDateString(),
                    category: course.category,
                }),
                () => console.log(this.state)
            );
        });
    }
    render() {
        // destructing state
        const { id, title, description, category, url, date } = this.state;
        // check if id is empty or not
        if (!id) return <div> Loading data </div>;

        return (
            <div>
                {/* bannerHead component placed here. */}
                <BannerHead />
                <div className='course_single my-4'>
                    <div className='container'>
                        <div className='row'>
                            <span>&nbsp;&nbsp;{category}&nbsp;&nbsp; </span> /&nbsp;&nbsp;
                            <sapn style={{ fontSize: '16px', fontWeight: 'bold' }} align='center'>
                                {' '}
                                {title}
                            </sapn>
                        </div>
                        <div className='row'>
                            <p>
                                <small>&nbsp;&nbsp;&nbsp;&nbsp;{date}</small>
                            </p>
                        </div>
                        <h1> {title.toUpperCase()} </h1>
                        <div className='row'></div>
                        <div className='row iframe-container my-4'>
                            <iframe
                                title={`${title}/${url}`}
                                width='340'
                                height='360'
                                src={`https://www.youtube.com/embed/${url}`}
                                frameBorder='0'
                                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className='course_details my-4'>
                    <div className='container'>
                        <div className='row'>
                            <p>{description}</p>
                        </div>

                        <div className='row'>
                            <button
                                type='button'
                                className='btn btn-warning bg_theme'
                                onClick={() => this.props.history.push('/courses')}
                                style={{ left: '40%', position: 'relative' }}
                            >
                                Click Here for more Courses
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
