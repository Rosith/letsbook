import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
            <div className="Label">
                <label>Email</label>
                <input></input>
            </div>
            <div className="Label">
                <label>Mobile</label>
                <input></input>
            </div>
        </div>
        )
    }
}

export default Profile;