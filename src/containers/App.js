import React, { Component } from 'react';
import { Route } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import logo from '../logo.svg';
import './App.css';
import Login from './Login';
import AuthRedirect from '../components/authRedirect';
import AppointmentList from './AppointmentList';
import { logoutUser } from '../store/actions/authAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Letz Book</h1>
        </header>
        <AuthRedirect exact path="/" auth={this.props.auth} component={AppointmentList} />
        <Route path='/login' component={Login} />

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
