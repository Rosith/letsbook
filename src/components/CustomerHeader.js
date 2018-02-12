import React, { Component } from 'react';
import {Grid, Cell, Button} from 'react-md';
import PropTypes from 'prop-types';



class CustomerHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo : process.env.REACT_APP_APP_LOGO,
        }

    }
    render() {
        return (
                <Grid>
                    <Cell size={4} phoneSize={1} className="Header-logo">
                       {this.state.logo}
                            </Cell>
                            <Cell size={4} phoneSize={1} >
                      
                            </Cell>
                    <Cell size={4} phoneSize={2}  className="Customer-align-right">
                        <Button primary raised className="Customer-Login-Button">Login</Button>
                            </Cell>
                          
                </Grid>
        )
    }
}

CustomerHeader.propTypes = {
    logo:PropTypes.string,
}

export default CustomerHeader;