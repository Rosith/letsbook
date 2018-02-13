import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Grid, Cell } from 'react-md';
import AccountMenu from '../components/AccountMenu';


class AdminHeader extends Component {
    constructor(props){
        super(props)
        this.state = {
            appName : process.env.REACT_APP_APP_NAME,
        }
    }

    render() {
        return (
                <Grid className="Admin-toolbar">
                    <Cell size={4} phoneSize={1}>
                        {this.state.appName}
                            </Cell>
                    <Cell size={4} phoneSize={1}>
                    </Cell>
                    <Cell size={4} phoneSize={2} className="Admin-right-align">
                    <AccountMenu/>
                            </Cell>
                </Grid>
        )
    }
}

/* AdminHeader.propTypes = {

} */

export default AdminHeader