import React from 'react';
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router';

const AuthRedirect = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render={props=>rest.auth === true ? <Component {...rest} /> : <Redirect to='/login'/>}
        />
    )
}

AuthRedirect.propTypes = {
    component:PropTypes.func.isRequired,
}

export default AuthRedirect
