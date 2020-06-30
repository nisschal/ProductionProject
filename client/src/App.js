/** @format */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import PageNotFound from './components/404/PageNotFound';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';
import CourseDetails from './components/CourseDetails';
import ProtectedRoute from './Auth/ProtectedRoute';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: 'basic',
        };
    }
    // decide weather to rerender or not
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.userType !== nextState.userType) return true;
    }
    // runs when html element is render in browser
    componentDidMount() {
        console.log('user', localStorage.user);
        // updating state if localStorage.user is not undefine
        if (localStorage.user !== undefined) {
            const User = JSON.parse(localStorage.user);
            this.setState(() => ({ userType: User.Usertype }));
        }
    }

    render() {
        return (
            <Router>
                <div className='App'>
                    <Navbar userType={this.state.userType} />
                    {/* Switch component acts like switch statement */}
                    <Switch>
                        {/* if browser url is changed to '/' then landing component is showen */}
                        <Route exact path='/' component={Landing} />
                        {/* if browser url is changed to '/register' then landing Register is showen */}

                        <Route exact path='/register' component={Register} />
                        {/* if browser url is changed to '/login' then landing Login is showen */}

                        <Route exact path='/login' component={Login} />
                        {/* /profile url is protected  and only allowed if user is authenticated*/}
                        <ProtectedRoute exact path='/Profile' component={Profile} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/courses' component={Courses} />
                        {/* /addCourse url is protected  and only allowed if user is authenticated*/}
                        <ProtectedRoute exact path='/addCourse' component={AddCourse} />
                        {/* /courseDetails/:id url is protected  and only allowed if user is authenticated*/}
                        <ProtectedRoute exact path='/courseDetails/:id' component={CourseDetails} />
                        <Route
                            path='*'
                            component={PageNotFound}
                            // <h1 className='error'>
                            //     404 Error Page not Found <br />
                            //     <span role='img' aria-label='emoji'>
                            //         &#128552;
                            //     </span>
                            //     <a href='/'>
                            //         <button className='btn btn-warning'>
                            //             Go To Home Page
                            //         </button>
                            //     </a>
                            // </h1>
                        />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
