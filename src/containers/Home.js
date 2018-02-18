import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CustomerLayout from './CustomerLayout';
import CustomerBanner from '../components/CustomerBanner';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: '',
        }

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <CustomerLayout>
                <CustomerBanner />
               
            </CustomerLayout>
        )
    }
}

Home.propTypes = {
    types: PropTypes.string,
}

export default Home;