import React, { Component } from 'react';
import {Route} from 'react-router';
import logo from '../logo.svg';
import './App.css';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <Route path='/login' component={Login}/>
       
      </div>
    );
  }
}

export default App;
