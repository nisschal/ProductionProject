/** @format */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';

// it gets component as a props and return same component if user is authenticated
const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            // three dots is the spread operator. it just copies and paste the object or array
            {...rest}
            // render is a method that render the element in browser
            render={(props) => {
                // if user is authenticated
                if (auth.isAuthenticated()) {
                    return <Component {...props} />;
                } else {
                    // otherwise redirected to home page
                    return (
                        <Redirect
                            to={{
                                pathname: '/ ',
                                state: { from: props.location },
                            }}
                        />
                    );
                }
            }}
        />
    );
};
export default ProtectedRoute;
