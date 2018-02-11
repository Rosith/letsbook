import React, { Component } from 'react';
//import PropTypes from 'prop-types';


//import './AdminLayout.css';
import AdminHeader from '../components/AdminHeader';

class AdminLayout extends Component {

    render() {
        return (
            <div>
                <AdminHeader />
                {this.props.children}
            </div>
        )
    }
}
export default AdminLayout;

