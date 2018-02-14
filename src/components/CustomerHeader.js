import React, { Component } from 'react';
import {Grid, Cell, Button} from 'react-md';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class CustomerHeader extends Component {
    constructor(props) {
        super(props);  
        this.onLoginClick = this.onLoginClick.bind(this);        
        this.state = {
            logo : process.env.REACT_APP_APP_LOGO,            
        }
    }

    onLoginClick() {
        //history.push('/login')
        this.props.history.push('/login');
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

                        <Button primary raised className="Customer-Login-Button" onClick={this.onLoginClick}>Login</Button>
                            </Cell>
                          
                </Grid>
        )
    }
}

CustomerHeader.propTypes = {
    logo:PropTypes.string,
}

export default withRouter(connect(null)(CustomerHeader));























