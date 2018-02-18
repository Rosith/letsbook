import React, { Component } from 'react';
import CustomerHeader from '../components/CustomerHeader';
import './CustomerLayout.css';


class CustomerLayout extends Component {

    render() {
        return (
            <div>
                <CustomerHeader />
                {this.props.children}
            </div>
        )
    }
}


export default CustomerLayout