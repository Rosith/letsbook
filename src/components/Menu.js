import React, { Component } from 'react'
import '../containers/Menu.css';
import Account from '../components/Account';
import Home from '../components/Home';
import Logout from '../components/Logout';
import AboutUs from '../components/AboutUs';

class Menu extends Component {

    render() {
        return (
            <div className="Menu-items" >
                <ul>
                <li>
                <a href="/Account">My Account</a>
                </li>
                <li>
                <a  href="/Home">Home</a>
                </li>
                <li>
                <a  href="/AboutUs">About Us</a>
                </li>
                <li>
                <a href="/Logout">Logout</a>
                </li>
                </ul>
                </div>
        )
    }
}
export default Menu;