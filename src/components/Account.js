import React, { Component } from 'react';
import '../containers/Menu.css'
class Account extends Component {
    render() {
        return (
            <div>
        <ul>
            <li>
                <a className="Menu-items" href="/Bookings">Bookings</a>
                <a className="Menu-items" href="/Profile">Profile</a>
            </li>
        </ul>
        </div>
        )
    }
}

export default Account;


