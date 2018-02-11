import React, { Component } from 'react';
import { Route } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import './App.css';
import Login from './Login';
import AuthRedirect from '../components/authRedirect';
import AppointmentList from './AppointmentList';
import { logoutUser } from '../store/actions/authAction';
import Logout from '../components/Logout';
import Menu from '../components/Menu';
import Home from '../components/Home';
import Account from '../components/Account';
import Bookings from '../components/Bookings';
import AboutUs from '../components/AboutUs';
import Profile from '../components/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthRedirect exact path="/" auth={this.props.auth} component={AppointmentList} />
        <Route path='/login' component={Login} />
        <Route path='/Home' component={Home}/>
        <Route path='/Account' component={Account}/>
        <Route path='/Bookings' component={Bookings}/>
        <Route path='/AboutUs' component={AboutUs}/>
        <Route path='/Profile' component={Profile}/>
      </div>
    );
  }
}
App.propTypes = {
  auth: PropTypes.bool,
  logoutUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth.authenticated,
})

export default withRouter(connect(mapStateToProps, { logoutUser })(App));
